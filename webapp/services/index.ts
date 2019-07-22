import * as firebase from "firebase/app";
import "firebase/auth";
import Dexie from 'dexie';
import { User, IUser, IDataBaseService } from "./type";


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

  getUser(): Promise<IUser> {
    return this.user.toCollection().first()
  }

  setUser(user: IUser): void {
    this.user.put(user)
  }



  user: Dexie.Table<IUser, string>

  constructor() {
    super("OutTripperDatabase");
    this.version(1).stores({
      user: 'id'
    });
    this.user.mapToClass(User);
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