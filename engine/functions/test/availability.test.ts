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
    match /availability/{availabilityId} {
      allow create : if true;
      allow read, write : if true;
    }
  }
}

`

beforeEach(async () => {
  //await admin.clearFirestoreData({ projectId });
});  

beforeAll(async () => {
  db = await authedApp(null);
  console.log(rules)
  // await admin.loadFirestoreRules({ projectId, rules });
  await initDatabase(db)
  //db.collection('availability').doc('pepe').set({foo: 'bar'})
  const result = await db.collection('availability').get()

  console.log(result)
});
 
afterAll(async () => {
  //const db = await authedApp(null);
  await admin.clearFirestoreData({ projectId });
  Promise.all(admin.apps().map(app => app.delete()));

});
 
describe('get availability', () => {
  it('get availability with full parameters', async() => {
    availbilityService.setConnector(db)
    const result = await availbilityService.getByProgramDateAndPax('JLWP',moment('2019-10-01','YYYY-MM-DD').toDate(),2)
    expect(result.length>0).toBe(true)
  })

  it('get Dates only by starting date', async() =>{
  
  })
})




