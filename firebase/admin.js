
var admin = require("firebase-admin");

var serviceAccount = require("path/to/serviceAccountKey.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://flexxo-dev-default-rtdb.firebaseio.com"
});

export const database = admin.database();