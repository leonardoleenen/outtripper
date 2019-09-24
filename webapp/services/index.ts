import * as firebase from "firebase/app";
import "firebase/auth";
import Dexie from 'dexie';
import { 
  User, 
  Destination,
  IUser, 
  IDataBaseService, 
  IDestination, 
  ISession,
  Session,
  Program, 
  IProgram,
  IDateAvailable,
  DateAvailable
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
}

export interface IBusinessService { 
  getResumenAvailability(): Promise<IDatesAvailable[]>
}

export class BusinessService implements IBusinessService {
  getResumenAvailability(): Promise<IDatesAvailable[]> {
    throw new Error("Method not implemented.");
  }
  
}

export const dataService = new OutTripperDatabase()

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