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
/**
 * OBJECTIVE: To understand how async..await works and how it defines a neater flow of code when asynchronous functions have to be called one after another.
 */
// async functions can pause and resume
const calculateSums = async () => {
    console.log( '*' );

    // when we wait on a promise, the function is paused (stops executing for the time being)
    try {
        const result = await sum( 12, 13 );
        console.log( '**' );
        console.log( result );

        const result2 = await sum( result, 14 );
        console.log( '***' );
        console.log( result2 );

        const result3 = await sum( result2, 15 );
        console.log( '****' );
        console.log( result3 );

        return result3; // the return will be wrapped up in a promise
    } catch( error ) {
        console.log( error.message );
        throw error;
    }
};

calculateSums()
    .then(finalResult => {
        console.log( 'finalResult = ', finalResult );
    })
    .catch(error => {
        console.log( error.message );
    });