// setTimeout is non-blocking
// the browser / Node JS proceeds to execute the rest of the code
function sum( x, y, callback ) {
    setTimeout(
        function() { // who calls this function? The environment - browser / Node JS
            console.log( 'i am a function' );
            // return x + y; // useless to return to environment
            callback( x + y );
        },
        2000 // 2 seconds
    );
}

const result = sum( 12, 13, function( result ) {
    console.log( 'result = ', result );
});