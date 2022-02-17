// asynchronous function
const sum = ( x, y, callback ) => {
    setTimeout(() => {
        const result = x + y;
        // return x + y;
        callback( result );
    }, 2000);
};

// callback hell / christmas tree
sum( 12, 13, result => {
    console.log( result );

    sum( result, 14, result2 => {
        console.log( result2 );

        sum( result2, 15, result3 => {
            console.log( result3 );

            sum( result3, 16, result4 => {
                console.log( result4 );
    
                sum( result4, 17, result5 => {
                    console.log( result5 );
                });
            });
        });
    });
});