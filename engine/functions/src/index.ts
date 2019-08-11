import * as functions from 'firebase-functions';

import {availbilityService,initDatabase}  from './services/index';
import * as moment from 'moment'
const {WebhookClient} = require('dialogflow-fulfillment');
// const {Card, Suggestion} = require('dialogflow-fulfillment');

import firebase from './services/firebase';


const cors = require('cors')({
  origin: true,
});



// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!");
 });


export const initMockDatabase = functions.https.onRequest((request, response) => {
  initDatabase(firebase.firestore()).
    then((r:any) => {
      return cors(request, response, () => {
        response.json({result:"Done", value: r})
      })
    }).
    catch(err => console.log(err))
})   

export const getAll = functions.https.onRequest((request, response) => {
  availbilityService.getAll().
    then(result => {
      return cors(request, response, () => {
        response.send();
      });
    }).
    catch(err => console.log(err))
})

export const getByProgramDateAndPax = functions.https.onRequest((request, response) => {
  availbilityService.getByProgramDateAndPax(
    request.body.idProgram,
    moment(request.body.startingAt,'YYYY-MM-DD hh:mm:ss').toDate(),
    request.body.pax).
      then(result => {
        return cors(request, response, () => {
          response.json({
            result:'done', 
            toHuman: availbilityService.humanize(),
            value: result})
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

async function getAvailability(agent : any) {
  const body =  {
    "idProgram":"JLWP",
    "startingAt":"2019-10-01", 
    "pax":1
  };

  await availbilityService.getByProgramDateAndPax(
    body.idProgram,
    moment(body.startingAt,'YYYY-MM-DD hh:mm:ss').toDate(),
    body.pax)
    
  availbilityService.humanize()
  agent.add(availbilityService.humanize());
  
 // agent.add('We have this dates available. Which may be works for you?');
}

export const fullfilmentEntryPoint =  functions.https.onRequest((request, response) => {
  const agent = new WebhookClient({ request, response });
  console.log('Dialogflow Request headers: ' + JSON.stringify(request.headers));
  console.log('Dialogflow Request body: ' + JSON.stringify(request.body));
 
  
  const intentMap = new Map();
  intentMap.set('Default Welcome Intent', welcome);
  intentMap.set('Default Fallback Intent', fallback);
  intentMap.set('RatesAndInfo - yes - email',sendReatesAndInfoByEmail);
  intentMap.set('Availability with year and month - fixed angler qty',getAvailability);
  intentMap.set('Availability for pax with month and year',getAvailability);
  // intentMap.set('your intent name here', yourFunctionHandler);
  // intentMap.set('your intent name here', googleAssistantHandler);
  agent.handleRequest(intentMap);
});
