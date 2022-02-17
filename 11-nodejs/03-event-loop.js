console.log( 1 );

setTimeout(() => {
    console.log( 2 );
}, 2000);

console.log( 3 );

setTimeout(() => {
    console.log( 4 );

    setTimeout(() => {
        console.log( 6 );
    }, 2000);
}, 0);

console.log( 5 );