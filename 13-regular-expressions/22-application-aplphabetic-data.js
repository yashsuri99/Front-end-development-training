// Test alphabet string
const word = /^\w+$/;
console.log( word.test( "hello world" ) );
console.log( word.test( "helloworld" ) );