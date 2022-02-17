// class Promise {
//     constructor( fn ) {
//         fn( () => {}, () => {} )
//     }
// }

const sum = ( x, y ) => {
    return new Promise(( resolve, reject ) => {
        setTimeout(() => {
            const result = x + y;
            resolve( result ); // Hey promise! Here is the result
        }, 2000);
    });
}

// -------- Promise ----------

const promise = sum( 12, 13, result => {
    console.log( result );
});

// Hey promise! When you get the result please call this function
promise.then(result => {
    console.log( result );
});