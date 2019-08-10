let admin =  require('firebase-admin');


export const getConnector = async() => {
  if (process.env.NODE_ENV != 'test') {
    await admin.initializeApp()
  }
  else {
    admin = require("@firebase/testing");
    const auth = null
    const projectId = 'firestore-emulator'
    await admin.initializeTestApp({projectId, auth })
    await admin.initializeAdminApp({databaseName: 'outtripper-emulator'})
  }
  return admin
}

//export const firebase = getConnector().firebase
//export const firestore = getConnector().firestore
export const connector = getConnector()


