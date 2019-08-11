import * as admin  from 'firebase-admin'
export default process.env.NODE_ENV !== 'test' ? ( !admin.apps.length ? admin.initializeApp() : admin) : admin


