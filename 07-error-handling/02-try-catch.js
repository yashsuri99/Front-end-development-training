// in a try block, execution continues till the first error is met.
// When a error is met, the control shifts to the catch block
// Rest of the try block is not executed
try {
    console.log( 1 );
    addListener(); // error
    console.log( 2 ); // this line does NOT execute
} catch( error ) {
    console.log( 'inside first catch' );
    console.log( error.message );
}