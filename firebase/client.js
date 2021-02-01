import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAb42q41W0gH-0OHLPw6mOHcvQoGFFfwtE",
    authDomain: "flexxo-dev.firebaseapp.com",
    databaseURL: "https://flexxo-dev-default-rtdb.firebaseio.com",
    projectId: "flexxo-dev",
    storageBucket: "flexxo-dev.appspot.com",
    messagingSenderId: "462526675458",
    appId: "1:462526675458:web:6156527a55904bd5e1051b",
    measurementId: "G-E04VE4YK0W"
};

!firebase.apps.length && firebase.initializeApp(firebaseConfig);

let database = firebase.database();

const mapUserFromFirebaseAuthToUser = (user) => {
    console.log("info de usuario" + user)
    if (user != null) {
        console.log("informacion de usuario " + user)
        const { displayName, email, photoURL, uid } = user
        return {
            avatar: photoURL,
            email,
            name: displayName,
            uid
        }
    } else {
        return null
    }
}

export const onAuthStateChanged = (onChange) => {
    return firebase
        .auth()
        .onAuthStateChanged(user => {
            const normalizedUser =
                mapUserFromFirebaseAuthToUser(user)
            onChange(normalizedUser)
        })
}

export const loginWithGoogle = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    return firebase
        .auth()
        .signInWithPopup(googleProvider)
    //        .then(mapUserFromFirebaseAuthToUser)
}

//Data the all booths
export const getBooths = () => {
    let booths = [];
    firebase.app().database().ref('/booths/')
        .once('value', (snapshot) => {
            const data = snapshot.val()
            for (let key in data) {
                let elems = {
                    code: data[key]['code'],
                    photo: data[key]['photo'],
                }
                booths.push(elems);
            }
        })
    return booths;
}



export const addBooth = () => {
    const boothId = Lg5DfOvUWjILYFg5_bx;
    return firebase.database().ref('/booths/' + boothId).once('value').then((snapshot) => {
        const boothName = (snapshot.val() && snapshot.val().name);
        // ...
    });

}

export const fetchData = () => {
    const boothId = -Lg5DfOvUWjILYFg5_bx;
    return database.ref('booths/' + boothId)
        .get()
        .then(snapshot => {
            return snapshot.on('name')
        })
}


export function writeUserData(userId, name, email, imageUrl) {
    firebase.database().ref('users/' + userId).set({
        username: name,
        email: email,
        profile_picture: imageUrl
    });
}