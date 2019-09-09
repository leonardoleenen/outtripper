
export const DIALOGFLOW_REGISTER_AGENT_API_KEY='ya29.c.ElpPB2ZTju-sGeE6GBSqZSd-HJkgcLleVvIxOHPO7VMtTJp7pbjlDx8AGvSWPGPr9oUXJsRxIyQkDAMHTbgUnmoeqVDkWUf8Cgo3xobhPn1kWhokJktvlx8rOyE'
export const DIALOG_FLOW_REGISTER_PROJECT_ID='outtripper-register-evwgya'
export const DIALOGFLOW_URL='https://dialogflow.googleapis.com/v2/projects'


export const getDialogFlowRegisterUrl= (sessionId) => (`/${DIALOGFLOW_URL}/${DIALOG_FLOW_REGISTER_PROJECT_ID}/agent/sessions/${sessionId}:detectIntent`)
