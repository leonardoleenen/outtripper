import { availbilityService, initDatabase}  from '../src/services/index';
import  * as admin from "@firebase/testing";
import * as moment from 'moment'
export const projectId = "firestore-emulator";
import {groupBy} from 'underscore'
import { IAvailability, IPeriod } from '../src/types';


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
  await admin.loadFirestoreRules({ projectId, rules });
  await initDatabase(db)
});
 
afterAll(async () => {
  await admin.clearFirestoreData({ projectId });
  Promise.all(admin.apps().map(app => app.delete())).catch(err => console.log(err))

});
 
describe('get availability', () => {
  it('get availability with full parameters - got only one program', async() => {
    availbilityService.setConnector(db)
    const period: IPeriod = {
      startingAt: moment('2019-10-01T00:00:00-03:00','YYYY-MM-DD').toDate(),
      till: moment('2019-10-30T00:00:00-03:00','YYYY-MM-DD').toDate()
    }
    const result = await availbilityService.getByProgramDateAndPax('JLWP',period,2)
    expect(result.length>0 && Object.keys(groupBy(result, (m:IAvailability) => m.program.id)).length===1).toBe(true)
  })

  it('get message of availability', async() =>{
    availbilityService.setConnector(db)
    const period: IPeriod = {
      startingAt: moment('2019-10-01T00:00:00-03:00','YYYY-MM-DD').toDate(),
      till: moment('2019-10-30T00:00:00-03:00','YYYY-MM-DD').toDate()
    }
    await availbilityService.getByProgramDateAndPax('JLWP',period,2)
    expect(availbilityService.humanize()).not.toBe('')
  })


  it('get availability without program filter with to diferents programs', async() => {
    availbilityService.setConnector(db)
    const period: IPeriod = {
      startingAt: moment('2020-02-01T00:00:00-03:00','YYYY-MM-DD').toDate(),
      till: moment('2020-02-28T00:00:00-03:00','YYYY-MM-DD').toDate()
    }
    const result = await availbilityService.getByDatesAndPax(period,2)
    expect(Object.keys(groupBy(result, (m:IAvailability) => m.program.id)).length>1).toBe(true)
  })

  it('get availability random', async() => {
    availbilityService.setConnector(db)
    const period: IPeriod = {
      startingAt: moment('2019-10-01T00:00:00-03:00','YYYY-MM-DD').toDate(),
      till: moment('2019-10-30T00:00:00-03:00','YYYY-MM-DD').toDate()
    }
    await availbilityService.getByProgramDateAndPax('JLWP',period,2)

    const randomDate = jest.fn(() => availbilityService.choiceRandom());
    randomDate()
    expect(randomDate).toHaveReturned()
  })
})




