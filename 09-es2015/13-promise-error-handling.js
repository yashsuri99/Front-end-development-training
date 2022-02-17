// Promise object can be in one of 3 state
    // Unfulfilled (operation is in progress) - from the time it is created to the time it is resolved / rejected, the promise remains in this state
    // Resolved - it goes into this state after the operation completes successfully and resolve() is called
    // Rejected - it goes into this state if the operation cannot complete and reject() is called
    const sum = ( x, y ) => {
        return new Promise(( resolve, reject ) => {
            setTimeout(() => {
                if( typeof x !== 'number' || typeof y !== 'number' ) {
                    reject( new Error( 'at least one of the arguments was not a number' ) );
                    return;
                }
    
                const result = x + y;
                resolve( result ); // Hey promise! Here is the result
            }, 2000);
        });
    }
    
    // -------- Promise ----------
    
    // the function passed to then() is executed is executed only when the promise resolves
    // in case of error anywhere in the chain of promises
    sum( 12, 13 )
        .then(result => {
            console.log( result );
    
            // if we start another asynhronous operation that returns a promise, we return the promise
            return sum( result, 14 );
        })
        .then(result2 => { // this is called after the promise returned in the above function resolves
            console.log( result2 );
    
            return sum( result2, 'hello' );
        })
        .then(result3 => {
            console.log( result3 );
        })
        .catch(error => {
            console.log( error.message );
        });