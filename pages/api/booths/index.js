import firebase from 'firebase';


export default (request, res) => {
    const { query } = request;

    const { id } = query


    //Data the all booths
    let booths = [];

    firebase.database().ref('/booths/')
        .once('value', (snapshot) => {
            const data = snapshot.val()


            for (let key in data) {
                let elems = {
                    code: data[key]['code'],
                    photo: data[key]['photo'],
                }
                booths.push(elems);
            }
            res.statusCode = 200
            res.json({ booths })

        })

}