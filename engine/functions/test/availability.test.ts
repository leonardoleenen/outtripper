import { availbilityService, initDatabase}  from '../src/services/index';
import  * as admin from "@firebase/testing";
import * as moment from 'moment'
export const projectId = "firestore-emulator";

// const auth = null

let db:any  = undefined

async function authedApp(auth:any) {
  return await admin.initializeTestApp({ projectId, auth }).firestore();
}


//const rules = fs.readFileSync("firestore.rules", "utf8");

const rules  = `
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write
    }
  }
}

`

beforeEach(async () => {
  //await admin.clearFirestoreData({ projectId });
}); 

beforeAll(async () => {
  db = await authedApp(null);
  await admin.loadFirestoreRules({ projectId, rules });
  await initDatabase(db)
  const result = await db.collection('availability').get()

  console.log(result)
});
 
afterAll(async () => {
  //const db = await authedApp(null);
  await admin.clearFirestoreData({ projectId });
  Promise.all(admin.apps().map(app => app.delete()));

});
 
describe('get availability', () => {
  it('get full params', async() => {
    // const db = await authedApp(null);
    //availbilityService.setConnector(db)
    //const result = await availbilityService.getByProgramDateAndPax('JLWK',moment('2019-10-01','YYYY-MM-DD').toDate(),2)
    //expect(result.length!=0).toBe(true)
    // db = await authedApp(null);
    //const result = await admin.firestore().collection('availability').get()
    //console.log(result)\
    // const db = await authedApp(null);
    availbilityService.setConnector(db)
    const result = await availbilityService.getByProgramDateAndPax('JLWK',moment('2019-10-01','YYYY-MM-DD').toDate(),2)

    const r2  = await db.collection('availability').get()
    console.log(result,r2)
    expect(1).toBe(1)
  })

  it('get Dates only by starting date', async() =>{
  
  })
})




