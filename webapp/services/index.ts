import * as firebase from "firebase/app";
import "firebase/auth";
import Dexie from 'dexie';
import { User, IUser, IDataBaseService } from "./type";


export const  firebaseConfig = {
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



    user: Dexie.Table<IUser,string>

    constructor () {
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
        message: "Welcome! My Name is Daniel and I will assist you in your signup process. Let's go!. What is your operation Name?",
        nextStage: 'inputOperationName',
    },
    inputOperationName: {
        message:'Please, write your operation, service or company name',
        action: 'SIGNUP SET OPERATION NAME',
        attribute: 'operationName'
    },

}