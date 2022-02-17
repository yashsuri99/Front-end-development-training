import fetch from 'node-fetch';

async function ajax( method, url, data ) {
    const response = await fetch( url, {
        method,
        body: JSON.stringify( data ),
        headers: {
            'Content-Type': 'application/json',
            // 'Authorization': localStorage.getItem( 'TOKEN' )
        }
    });
                
    if( response.ok ) {
        return response.json();
    } else {
        throw new Error( 'Some error occured' );
    }
}

const newWorkshop = {
    "name": "Yash",
    "description": "jQuery is a JavaScript library",
    "startDate": "2020-03-01T04:00:00.000Z",
    "endDate": "2020-03-03T08:00:00.000Z",
    "time": "9:30 am - 1:30 pm",
    "location": {
        "address": "Tata Elxsi, Prestige Shantiniketan",
        "city": "Bangalore",
        "state": "Karnataka"
    },
    "modes": {
        "inPerson": true,
        "online": false
    },
    "imageUrl": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/JQuery_logo.svg/524px-JQuery_logo.svg.png"
};

ajax( 'POST', `http://workshops-server.herokuapp.com/workshops`, newWorkshop )
    .then(data => {
        console.log( data );
    })
    .catch(error => {
        console.log( error.message );
    });