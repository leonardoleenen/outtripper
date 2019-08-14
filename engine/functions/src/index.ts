import * as functions from 'firebase-functions';

import {availbilityService,initDatabase}  from './services/index';
import * as moment from 'moment'
const {WebhookClient, Image} = require('dialogflow-fulfillment');
// const {Card, Suggestion} = require('dialogflow-fulfillment');
//import {Image} from 'dialogflow-fulfillment';
import {last} from 'underscore';
import firebase from './services/firebase';
import { IPeriod, IHumanMessage, ICard, IImage } from './types';


const cors = require('cors')({
  origin: true,
});



// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//


export const initMockDatabase = functions.https.onRequest((request, response) => {
  initDatabase(firebase.firestore()).
    then((r:any) => {
      return cors(request, response, () => {
        response.json({result:"Done", value: r})
      })
    }).
    catch(err => console.log(err))
})   




function welcome(agent: any) {
  agent.add(`Welcome to my agent!`);
}

function fallback(agent: any) {
  agent.add(`I didn't understand`);
  agent.add(`I'm sorry, can you try again?`);
}

function sendReatesAndInfoByEmail(agent: any) {
  agent.add('We have sent to your email address all detail info and rates about our lodge. Do you want another inquire?');
}


async function getAvailabilityByPeriodAndPax(agent : any) {
  const context = <any|null>last(agent.contexts)

  const period : IPeriod = {
    startingAt: moment(context.parameters.availability_range.startDate,'YYYY-MM-DD').toDate(),
    till: moment(context.parameters.availability_range.endDate,'YYYY-MM-DD').toDate()
  }

  await availbilityService.getByDatesAndPax(period,context.parameters.paxQtyToTravel)
  agent.add(availbilityService.humanize().message); 
  const components: ICard[] | IImage[] | undefined  = (<IHumanMessage>availbilityService.humanize()).payload 
  if (components)
    components.forEach((e:any)  => {
      if (e.kind === 'Image'){
        agent.add(new Image(e.url))
      }
    })


}

async function getRandomAvailability(agent:any) {
  const context = <any|null>last(agent.contexts)
  const period : IPeriod = {
    startingAt: moment(context.parameters.availability_range.startDate,'YYYY-MM-DD').toDate(),
    till: moment(context.parameters.availability_range.endDate,'YYYY-MM-DD').toDate()
  }
  await availbilityService.getByDatesAndPax(period,context.parameters.paxQtyToTravel)
  agent.add(availbilityService.dateToHuman([availbilityService.choiceRandom()]))
}


export const fullfilmentEntryPoint =  functions.https.onRequest((request, response) => {
  const agent = new WebhookClient({ request, response });
  console.log('Dialogflow Request headers: ' + JSON.stringify(request.headers));
  console.log('Dialogflow Request body: ' + JSON.stringify(request.body));
 
  
  const intentMap = new Map();
  intentMap.set('Default Welcome Intent', welcome);
  intentMap.set('Default Fallback Intent', fallback);
  intentMap.set('RatesAndInfo - yes - email',sendReatesAndInfoByEmail);
  intentMap.set('Availability with year and month - fixed angler qty',getAvailabilityByPeriodAndPax);
  intentMap.set('Availability with year and month - fixed angler qty - any date',getRandomAvailability)
  agent.handleRequest(intentMap);
});
