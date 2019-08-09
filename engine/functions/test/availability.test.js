
import moment from 'moment';
import {availbilityService, initDatabase}  from '../src/services/index';
import  * as admin from "@firebase/testing";

export const projectId = "firestore-emulator";

const auth = null

async function authedApp(auth) {
  return await admin.initializeTestApp({ projectId, auth }).firestore();
}


//const rules = fs.readFileSync("firestore.rules", "utf8");

const rules  = `
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow read;
      allow create: if request.auth.uid == userId && request.resource.data.createdAt == request.time;
    }
    match /availability/{availabilityId} {
      allow read;
      allow create;
    }
  }
}

`

beforeEach(async () => {
  //connector = await getConnector()
  console.log('llamamos beforeEach')
  await admin.clearFirestoreData({ projectId });
}); 

beforeAll(async () => {
  const db = await authedApp(null);
  await initDatabase(db)
  await admin.loadFirestoreRules({ projectId, rules });
});
 
afterAll(async () => {
  console.log('llamamos al afterAll')
  const db = await authedApp(null);
  Promise.all(admin.apps().map(app => app.delete()));
});
 
describe('get availability', () => {
  it('get full params', async() => {
    const db = await authedApp(null);
    //availbilityService.setConnector(db)
    //const result = await availbilityService.getByProgramDateAndPax('JLWK',moment('2019-10-01','YYYY-MM-DD').toDate(),2)
    //expect(result.length!=0).toBe(true)
    const result = await db.collection('availability').get()
    console.log(result.length)
    expect(1).toBe(1)
  })

  it('get Dates only by starting date', async() =>{
  
  })
})




