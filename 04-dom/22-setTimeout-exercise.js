function sum( x, y, callback ) {
    setTimeout(
        function() {
            callback( x + y );
        },
        2000
    );
}

// callback hell
const result = sum( 12, 13, function( result ) {
    console.log( 'result = ', result );

    // use sum to find the sum of the previous step and 14 and print it
    sum( result, 14, function( result2 ) {
        console.log( 'result2 = ', result2 );

        // find the sum fo result2 and 15 and print it (use sum())
        sum( result2, 15, function( result3 ) {
            console.log( 'result3 = ', result3 );

            sum( result3, 16, function( result4 ) {
                console.log( 'result4 = ', result4 );
            });
        });
    });
});