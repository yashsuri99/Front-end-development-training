function sum( x, y ) {
    const p = new Promise(function( resolve, reject ) {
        setTimeout(
            function() {
                resolve( x + y ); // the Promise object gets the result
            },
            2000
        );
    });

    return p;
}

// we get a Promise when we call sum() now
const p = sum( 12, 13 );

p.then(function( result ) {
    console.log( 'result is ', result );
});