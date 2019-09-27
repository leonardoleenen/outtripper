import * as firebase from "firebase/app";
import "firebase/auth";

import PouchDB from 'pouchdb';
import PouchDBFind from 'pouchdb-find'

import { 
  IUser, 
  IDataBaseService, 
  IDestination, 
  ISession,
  IDateAvailable,
  IProgram,
  IContact
} from "./type";


export const firebaseConfig = {
  apiKey: "AIzaSyDdgmV1ZbpihvTi2IMNrBs0D089DRpof1M",
  authDomain: "outtripper-app.firebaseapp.com",
  databaseURL: "https://outtripper-app.firebaseio.com",
  projectId: "outtripper-app",
  storageBucket: "outtripper-app.appspot.com",
  messagingSenderId: "sender-id",
  appID: "app-id",
};


if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

/*
export class OutTripperDatabase extends Dexie implements IDataBaseService {
  insertDateAvailable(IDateAvailable: any): void {
    throw new Error("Method not implemented.");
  }
  
  insertProgram(program: import("./type").IProgram): void {
    this.program.put(program)
  }

  getToken(): Promise<string> {
    return this.session.toCollection().first().then( (session:ISession) => session.token)
  }

  setSession(data: ISession): void {
    this.session.put(data)
  }
  cleanSession(): void {
    this.session.clear()
  }

  insertDestinationInfo(info: IDestination): void {
    this.destination.put(info)
  }

  getDestinationInfo(): Promise<IDestination> {
    throw new Error("Method not implemented.");
  }

  getUser(): Promise<IUser> {
    return this.user.toCollection().first()
  }

  setUser(user: IUser): void {
    this.user.put(user)
  }

  user: Dexie.Table<IUser, string>
  destination: Dexie.Table<IDestination,string>
  session: Dexie.Table<ISession,string>
  program: Dexie.Table<IProgram,string>
  dateAvailable : Dexie.Table<IDateAvailable, string>
  constructor() {
    super("OutTripperDatabase");
    this.version(1).stores({
      user: 'id',
      destination: 'id',
      session: 'userid',
      program: 'id',
      dateAvailable: 'id'
    });

    this.session.mapToClass(DateAvailable)
    this.session.mapToClass(Program)
    this.session.mapToClass(Session)
    this.destination.mapToClass(Destination)
    this.user.mapToClass(User);
  }
}*/


export class PouchDatabaseService implements IDataBaseService {
  private db: any 
  private remote: any

  insertContact(contact: IContact): void {
    contact['collectionKind'] = 'contact'
    this.db.put(contact)
  }

  getContacts(): Promise<IContact[]> {
    return this.db.find({
      selector: {
        collectionKind: 'contact'
      }
    }).then(result => result.docs)
  }

  getProgram(id: string): Promise<import("./type").IProgram> {
    return this.db.get(id)
  }

  getDatesAvailables(): Promise<IDateAvailable[]> {
    return this.db.find({
      selector: {
        collectionKind: 'datesAvailable'
      }
    }).then(result => result.docs)
  }


  insertDateAvailable(IDateAvailable: any): void {
    throw new Error("Method not implemented.");
  }
  
  insertProgram(program: import("./type").IProgram): void {
    program['collectionKind'] = 'program'
    program['_id']= program.id
    this.db.put(program)
  }

  getToken(): Promise<string> {
    return this.db.find({
      selector: {
        collectionKind: 'session'
      }
    }).then(result => result.docs[0].token)
  }

  setSession(data: ISession): void {
    data['collectionKind'] = 'session'
    this.db.post(data)
  }

  cleanSession(): void {
    throw new Error("Method not implemented.");
    //this.session.clear()
  }

  insertDestinationInfo(info: IDestination): void {
    this.db.put(info)
  }

  getDestinationInfo(): Promise<IDestination> {
    return this.db.find({
      selector: {
        collectionKind: 'destination'
      }
    }).then(result => result.docs[0])
  }

  getUser(): Promise<IUser> {
    return this.getToken().then(result => {
      console.log(atob(result))
      return JSON.parse(atob(result))
    })
  }

  setUser(user: IUser): void {
   //  throw new Error("Method not implemented.");
    this.db.put(user)
  }

  constructor() {
    PouchDB.plugin(PouchDBFind);
    this.db = new PouchDB('outtripper')
    this.remote  = new PouchDB('http://localhost:5984/outtripper')
    this.db.sync( this.remote, {
      live: true
    })
  }

  
}

export interface IBusinessService { 
  getResumenAvailability(): Promise<IDateAvailable[]>
  getDatesAvailabilityList(program_id?:string): Promise<IDateAvailable[]>

  getProgram(program_id:string): Promise<IProgram>

  getContacts() : Promise<IContact[]>
}

// export const dataService = new OutTripperDatabase()
export const dataService = new PouchDatabaseService()


export class BusinessService implements IBusinessService {
  
  

  ds: any

  getProgram(program_id: string): Promise<IProgram> {
    return this.ds.getProgram(program_id)
  }

  getContacts(): Promise<IContact[]> {
    return this.ds.getContacts()
  }

  getDatesAvailabilityList(program_id?: string): Promise<IDateAvailable[]> {
    return this.ds.getDatesAvailables()
  }

  getResumenAvailability(): Promise<IDateAvailable[]> {
    throw new Error("Method not implemented.");
  }

  constructor(_ds: any) {
    this.ds = _ds
  }
}

export const businessService = new BusinessService(dataService)




export default firebase


export const signUpProcess = {
  welcome: {
    message: "Welcome! My Name is Pedro and I will assist you in your signup process. Let's go!",
    nextStage: 'inputOperationName',
    component: 'SystemProfile'
  },
  operationKind: {
    message: "What kind operation do you have?",
    component: 'ChatSystem',
    inputCommand: {
      component: 'ChatMultiButton',
      action: 'SET OPERATION KIND',
      attribute: 'operationKind',
      params: {
        optionValues: ["FISH", 'HUNT','TREK'],
      },
    },
    nextStage: 'operationName'
  },
  operationName: {
    message: "Please, What's your operation name?",
    component: 'ChatSystem',
    inputCommand: {
      component: 'ChatInput',
      action: 'SET OPERATION NAME',
      attribute: 'operationName',
    },
    nextStage: 'operationLevel'
  },
  operationLevel: {
    message: "What kind of service you offer?",
    component: 'ChatSystem',
    inputCommand: {
      component: 'ChatMultiButton',
      action: 'SET OPERATION NAME',
      attribute: 'operationName',
      params: {
        optionValues: ["I'M GUIDE", 'LODGE'],
      },
    },
    nextStage: 'lastName'
  },
  

}


/*

  inputOperationName: {
    message: 'Please, Whats your name?',
    component: 'ChatSystem',
    inputCommand: {
      component: 'ChatInput',
      action: 'SET FIRST NAME',
      attribute: 'firstName',
    },
    nextStage: 'lastName'
  },
  lastName: {
    message: 'Please, Whats your LastName?',
    component: 'ChatSystem',
    inputCommand: {
      component: 'ChatInput',
      action: 'SET LAST NAME',
      attribute: 'lastName',
    },
    nextStage: 'favoriteColor'
  },
  favoriteColor: {
    message: 'What is your favorite color? ',
    component: 'ChatSystem',
    inputCommand: {
      component: 'ChatMultiButton',
      params: {
        optionValues: ["RED", 'BLUG','YELLOW'],
      },
      action: 'SET FAVORITE COLOR',
      attribute: 'favoriteColor'
    },
    nextStage: 'Address'
  }
  */