const sum = ( x, y ) => x + y;
const square = x => {
    if( typeof x !== 'number' ) {
        throw new Error( 'square is not defined as the argument is not a number' );
    }
    
    return x * x;
};

const distance = ( a, b ) => {
    try {
        const squareA = square( a );
        const squareB = square( b );
        const sumSquareASquareB = sum( squareA, squareB );

        return Math.sqrt( sumSquareASquareB );
    } catch( error ) {
        console.log( error.message );
    }

    return 'undefined result';
}

// EXERCISE: Move the try..catch to this pice of code instead of in distance()
const dist = distance( 3, 'hello' );
console.log( dist );

// Function call stack
// when a function is called an entry is added to the top of the stack
// when a function returns, its entry is popped off the stack

// Exercise Solution
const sum = ( x, y ) => x + y;
const square = x => {
    if( typeof x !== 'number' ) {
        throw new Error( 'square is not defined as the argument is not a number' );
    }
    
    return x * x;
};
const dist = (x,y) => {
    if(typeof x !== 'number' || typeof y !== 'number'){
    throw new Error('at least one argument is not a number');}

    const squareA = square( x );
    const squareB = square( y );
    const sumSquareASquareB = sum( squareA, squareB );

    return Math.sqrt( sumSquareASquareB );
}

try {
    console.log( dist( 3, 4 ) );
} catch( error ) {
    console.log( error.message );
}

console.log( 'last line' );
