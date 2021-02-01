import firebase from 'firebase';


export default (request, res) => {
    const { query } = request;

    const { id } = query


    //Data the all booths
    let bookeds = [];

    firebase.database().ref('/users/' + { id })
        .on('value', (snapshot) => {
            const data = snapshot.val()
            console.log(data)


            for (let key in data) {
                let elems = {
                    booked: data[key]['booked'],
                }
                bookeds.push(elems);
            }
            res.statusCode = 200
            res.json({ bookeds })

        })

}