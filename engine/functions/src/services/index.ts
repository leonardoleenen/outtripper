import {IAvailabilityService, IProgram, IAvailability, Program,Availability, IPeriod, IHumanMessage, IImage} from '../types';
import * as moment from 'moment'
import {groupBy, Dictionary} from 'underscore'

import firebase from './firebase'

enum LastCall {
  GET_AVAILABILITY =  "GET AVAILABILITY",
  INIT = "INIT"
}

class AvailabilityService implements IAvailabilityService {

  firestore:any = (process.env.NODE_ENV !== 'test' && firebase!== undefined) ? firebase.firestore() : undefined
  lastCall: LastCall = LastCall.INIT
  
  //firestore:any = firebase.firestore()

  /** Overwrite connector  */
  setConnector(connector:any) { 
    this.firestore = connector
  }
 
  private result : IAvailability[] = []
  getByDates( period: IPeriod): Promise<IAvailability[]> {
    this.lastCall = LastCall.GET_AVAILABILITY
    return this.getRawData().then((snap:any) => {
      const allDates = snap.docs.map((doc:any) => Availability.JSONToClass(doc.data()))
      this.result =  allDates.
              filter((d:any) => d.startingAt.getTime() >= period.startingAt.getTime()).
              filter((d:any) => d.starting.getTime() <= period.till.getTime())
      return this.result
    })
  }

  getByDatesAndPax(period: IPeriod, pax: number): Promise<IAvailability[]> {
    this.lastCall = LastCall.GET_AVAILABILITY
    return this.getRawData().then((snap:any) => {
      const allDates = snap.docs.map((doc:any) => Availability.JSONToClass(doc.data()))
      this.result =  allDates.
              filter((d:any) => d.startingAt.getTime() >= period.startingAt.getTime()).
              filter((d:any) => d.startingAt.getTime() <= period.till.getTime()).
              filter((d:any) => d.freeSpots >=pax)
      return this.result
    })
  }

  choiceRandom(): IAvailability {
    // for this version take the first element of the list
    return this.result[0] 
  }

  dateToHuman(dates : IAvailability[]) : string {
    return dates.map(d => moment(d.startingAt).format('MMMM Do')).join(', ')
  } 

  getRawData(): Promise<any> {
    const availabilityRef = this.firestore.collection('availability')
    return availabilityRef.get()
  }

  private humanizeAvailability(): IHumanMessage { 
    const message = 'Sorry, we need more info'

    const programsInAvailability:Dictionary<IAvailability[]>= groupBy(this.result, (m: IAvailability) => m.program.id)

    const programsKeys  = Object.keys(programsInAvailability)

    if (programsKeys.length>1)
      return {
        message: `We have ${Object.keys(programsInAvailability).length} diferents programs for those dates: ${programsKeys.map(p => programsInAvailability[p][0].program.name).join(', ')}. Which program do you like to get availability?`,
        payload: [<IImage>{
            kind: 'Image',
            url:'https://res.cloudinary.com/dtyymz4nn/image/upload/v1565772736/Jurassic%20Lake/Captura_de_pantalla_2019-08-14_a_la_s_05.50.31.png'
          },
          <IImage>{
            kind: 'Image',
            url:'https://res.cloudinary.com/dtyymz4nn/image/upload/v1565772736/Jurassic%20Lake/Captura_de_pantalla_2019-08-14_a_la_s_05.50.38.png'
          }
        ]
      }

    if(this.result.length===0)
      return  {
        message: "Sorry, we don't more space left for this dates.",
      }
    
    if(this.result.length> 0 && this.result.length <=4)
      return {
        message: 'We got a few available spots for this dates. Any of this dates works for you? ' +  this.dateToHuman(this.result)
      }
    
    if(this.result.length >4){
      return {
        message: 'We got a few available spots for this dates. Do you prefer the first 2 weeks or 2 Last?'
      }
    }
    
    return {
      message
    }
  }

  humanize(): IHumanMessage {
    switch(this.lastCall) {
      case LastCall.GET_AVAILABILITY:
        return this.humanizeAvailability()
      default:
        return {
          message: "Sorry, we don't have any message for that"
        }
    }
  }

  /* For all query we don't use where clause native from firestore. This is because firebase got a few limitations 
  in your query lengauje like != (WFT??). For this reason we will use customs filters in code. 
  */


  get(program: IProgram): Promise<IAvailability[]> {
    throw new Error("Method not implemented.");
  }

  getByProgramDateAndPax(idProgram: string, period: IPeriod, pax: number): Promise<IAvailability[]> {
    this.lastCall = LastCall.GET_AVAILABILITY
    const availabilityRef = this.firestore.collection('availability')
    return availabilityRef.get().
      then((snap:any) => {
        const allDates = snap.docs.map((doc:any) => Availability.JSONToClass(doc.data()))
        this.result =  allDates.
                filter((d:any) => d.freeSpots >=pax).
                filter((d:any) => d.startingAt.getTime() >= period.startingAt.getTime()).
                filter((d:any) => d.startingAt.getTime() <= period.till.getTime()).
                filter((d:any) => d.program.id === idProgram)
        return this.result
      })
  }
  

  set(program: IProgram, period: IPeriod, till: Date,freeSpots: number): Promise<void> {
    throw new Error("Method not implemented.");
  }

  getAll() : Promise<IAvailability[]> {
    this.lastCall = LastCall.GET_AVAILABILITY
    return this.firestore.collection('availability').get().then((querySnapshot : any) => {
      querySnapshot.forEach((doc: any) => {
        this.result.push(Availability.JSONToClass(doc.data())) //Please, don't forget .data() method!! 
      });
      return this.result
    })
  }
}

export const availbilityService = new AvailabilityService()


export const initDatabase= (firestore:any): Promise<any>  => {
  const weeklyProgram = new Program("JLWP","Jurassic Lake Weekly program",10,1)
  const halfWeek = new Program("JLHW1","Jurassic Lake Half first week",10,1)
  const availabilityCollection = firestore.collection('availability')
  
  return Promise.all(
    [
      availabilityCollection.add(new Availability(weeklyProgram,moment('2019-09-28','YYYY-MM-DD').toDate(),moment('2019-10-05','YYYY-MM-DD').toDate(), 4).toJSON()),
      availabilityCollection.add(new Availability(weeklyProgram,moment('2019-10-05','YYYY-MM-DD').toDate(),moment('2019-10-12','YYYY-MM-DD').toDate(), 10).toJSON()),
      availabilityCollection.add(new Availability(weeklyProgram,moment('2019-10-12','YYYY-MM-DD').toDate(),moment('2019-10-19','YYYY-MM-DD').toDate(), 4).toJSON()),
      availabilityCollection.add(new Availability(weeklyProgram,moment('2019-10-19','YYYY-MM-DD').toDate(),moment('2019-10-26','YYYY-MM-DD').toDate(), 6).toJSON()),
      availabilityCollection.add(new Availability(weeklyProgram,moment('2019-10-26','YYYY-MM-DD').toDate(),moment('2019-11-02','YYYY-MM-DD').toDate(), 4).toJSON()),
      availabilityCollection.add(new Availability(weeklyProgram,moment('2019-11-23','YYYY-MM-DD').toDate(),moment('2019-11-30','YYYY-MM-DD').toDate(), 8).toJSON()),
      availabilityCollection.add(new Availability(weeklyProgram,moment('2019-12-21','YYYY-MM-DD').toDate(),moment('2019-12-28','YYYY-MM-DD').toDate(), 8).toJSON()),
      availabilityCollection.add(new Availability(weeklyProgram,moment('2019-12-28','YYYY-MM-DD').toDate(),moment('2019-01-04','YYYY-MM-DD').toDate(), 10).toJSON()),
      availabilityCollection.add(new Availability(weeklyProgram,moment('2020-01-11','YYYY-MM-DD').toDate(),moment('2020-01-18','YYYY-MM-DD').toDate(), 8).toJSON()),
      availabilityCollection.add(new Availability(weeklyProgram,moment('2020-01-18','YYYY-MM-DD').toDate(),moment('2020-01-25','YYYY-MM-DD').toDate(), 1).toJSON()),
      availabilityCollection.add(new Availability(weeklyProgram,moment('2020-01-25','YYYY-MM-DD').toDate(),moment('2020-02-01','YYYY-MM-DD').toDate(), 10).toJSON()),
      availabilityCollection.add(new Availability(weeklyProgram,moment('2020-02-01','YYYY-MM-DD').toDate(),moment('2020-02-08','YYYY-MM-DD').toDate(), 10).toJSON()),
      availabilityCollection.add(new Availability(halfWeek,moment('2020-02-01','YYYY-MM-DD').toDate(),moment('2020-02-04','YYYY-MM-DD').toDate(), 10).toJSON()),
      availabilityCollection.add(new Availability(weeklyProgram,moment('2020-03-14','YYYY-MM-DD').toDate(),moment('2020-03-21','YYYY-MM-DD').toDate(), 2).toJSON()),
      availabilityCollection.add(new Availability(weeklyProgram,moment('2020-03-21','YYYY-MM-DD').toDate(),moment('2020-03-28','YYYY-MM-DD').toDate(), 10).toJSON()),
    ])  
}