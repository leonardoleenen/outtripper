import {IAvailabilityService, IProgram, IAvailability, Program,Availability} from '../types';
import * as moment from 'moment'

import * as admin  from 'firebase-admin'



if (process.env.NODE_ENV != 'test') {
  admin.initializeApp()
}

class AvailabilityService implements IAvailabilityService {

  firestore:any = process.env.NODE_ENV != 'test' ? admin.firestore() : undefined
  
  /** Overwrite connector  */
  setConnector(connector:any) { 
    this.firestore = connector
  }
 
  private result : IAvailability[] = []
  getByDates(startingAt: Date): Promise<IAvailability[]> {
    return this.getRawData().then((snap:any) => {
      const allDates = snap.docs.map((doc:any) => Availability.JSONToClass(doc.data()))
      this.result =  allDates.
              filter((d:any) => d.startingAt.getTime() >= startingAt.getTime())
      return this.result
    })
  }

  getByDatesAndPax(startingAt: Date, pax: number): Promise<IAvailability[]> {
    return this.getRawData().then((snap:any) => {
      const allDates = snap.docs.map((doc:any) => Availability.JSONToClass(doc.data()))
      this.result =  allDates.
              filter((d:any) => d.startingAt.getTime() >= startingAt.getTime()).
              filter((d:any) => d.freeSpots >=pax)
      return this.result
    })
  }

  choiceRandom(): IAvailability {
    throw new Error("Method not implemented.");
  }

  dateToHuman(dates : IAvailability[]) : string {
    return dates.map(d => moment(d.startingAt).format('MMMM Do YYYY')).join(', ')
  } 

  getRawData(): Promise<any> {
    const availabilityRef = this.firestore.collection('availability')
    return availabilityRef.get()
  }

  humanize(): string {
    let message = 'Sorry, we need more info'

    if(this.result.length===0)
      return  "Sorry, we don't more space left for this dates."
    
    if(this.result.length> 0 && this.result.length <=4)
      return 'We got a few available spots for this dates. Any of this dates works for you? ' +  this.dateToHuman(this.result)
    
    return message
  }

  /* For all query we don't use where clause native from firestore. This is because firebase got a few limitations 
  in your query lengauje like != (WFT??). For this reason we will use customs filters in code. 
  */


  get(program: IProgram): Promise<IAvailability[]> {
    throw new Error("Method not implemented.");
  }

  getByProgramDateAndPax(idProgram: string, startingDate: Date, pax: number): Promise<IAvailability[]> {
    const availabilityRef = this.firestore.collection('availability')
    return availabilityRef.get().
      then((snap:any) => {
        const allDates = snap.docs.map((doc:any) => Availability.JSONToClass(doc.data()))
        this.result =  allDates.
                filter((d:any) => d.freeSpots >=pax).
                filter((d:any) => d.startingAt.getTime() >= startingDate.getTime()).
                filter((d:any) => d.program.id === idProgram)
        return this.result
      })
  }
  

  set(program: IProgram, startingAt: Date, till: Date,freeSpots: number): Promise<void> {
    throw new Error("Method not implemented.");
  }

  getAll() : Promise<IAvailability[]> {
    return this.firestore().collection('availability').get().then((querySnapshot : any) => {
      querySnapshot.forEach((doc: any) => {
        this.result.push(Availability.JSONToClass(doc.data())) //Please, don't forget .data() method!! 
      });
      return this.result
    })
  }
}

export const availbilityService = new AvailabilityService()


export const initDatabase= (firestore:any): Promise<any>  => {
  const p = new Program("JLWP","Jurassic Lake Weekly program",10,1)
  const availabilityCollection = firestore.collection('availability')
  
  return Promise.all(
    [
      availabilityCollection.add(new Availability(p,moment('2019-10-05','YYYY-MM-DD').toDate(),moment('2019-10-12','YYYY-MM-DD').toDate(), 10).toJSON()),
      availabilityCollection.add(new Availability(p,moment('2019-10-12','YYYY-MM-DD').toDate(),moment('2019-10-19','YYYY-MM-DD').toDate(), 8).toJSON()),
      availabilityCollection.add(new Availability(p,moment('2019-10-19','YYYY-MM-DD').toDate(),moment('2019-10-12','YYYY-MM-DD').toDate(), 4).toJSON()),
      availabilityCollection.add(new Availability(p,moment('2019-10-26','YYYY-MM-DD').toDate(),moment('2019-10-26','YYYY-MM-DD').toDate(), 6).toJSON())
    ])  
}