import fetch from 'node-fetch';
// fetch API - new way of making Ajax call (HTTP request)
// Node JS does not have fetch API -> Please execute this code in the browser / include node-fetch library and use it
// fetch() function makes an Ajax calls and returns a promise
// The promise resolves when the backend gives us a response (even 400, 401, 403, 404, 409, 500 etc. are considered as "success"!!!)
// The promise rejects ONLY if there is a network issue
function ajax( method, url, data ) {
    // return a promise
    return fetch( url )
                .then(response => {
                    if( response.ok ) { // actually success (it is NOT 400, 401, etc.)
                        // json() returns a promise
                        // json() starts converting the received JSON text to a JS object / array etc.
                        // once successfully converted, it resolves (it rejects if the JSON data is not in correct format)
                        return response.json();
                    } else {
                        // we need to construct the error message based on the response body
                        throw new Error( 'Some error occured' );
                    }
                });
}

// in another part of the application we use ajax()
// here, we want to do something with the received data 
ajax( 'GET', `http://workshops-server.herokuapp.com/workshop` )
    .then(data => {
        console.log( data );
    })
    .catch(error => {
        console.log( error.message );
    });