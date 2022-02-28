function calculateSum( n ) {
    let sum = 0;

    for( let i = 1; i <= n; i++ ) {
        sum += i;
    }

    return sum;
}

onmessage = function( { data: { num } } ) {
    let sum = calculateSum( num );

    postMessage({
        // sum: sum
        sum
    });
}