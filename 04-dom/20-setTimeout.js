// setTimeout is non-blocking
// the browser / Node JS proceeds to execute the rest of the code
setTimeout(
    function() {
        console.log( 'i am a function' );
    },
    2000 // 2 seconds
);

console.log( 'i am the line after call to setTimeout' );