let admin = require("firebase-admin");
let serviceAccount = require("./privatekeys.json");

if(admin.apps.length === 0){
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
}


const firestore = admin.firestore()

export {firestore}