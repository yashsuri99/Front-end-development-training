const sum = ( x, y ) => {
    if( typeof x !== 'number' || typeof y !== 'number' ) {
        // create and throw a custom error
        throw new Error( 'at least one argument was not a number' );
    }

    return x + y;
}

try {
    console.log( sum( 12, 'hello' ) );
} catch( error ) {
    console.log( error.message );
}

console.log( 'last line' ); // will this line execute? NO