
var admin = require("firebase-admin");

var serviceAccount = require("path/to/serviceAccountKey.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "firebase-adminsdk-ljp0i@organizer-345c5.iam.gserviceaccount.com"
});

export const database = admin.database();