// Event queue - functions waiting to be executed
// After 2 seconds, Node JS will add f1 to the queue
// Q: f1
// Since the runtime is busy at the end of 2 seconds, it CANNOT immediately pick up f1 and execute it.
// f1 waits in the queue till the runtime becomes free. Then it is pciked up and executed.

// all event handling - aja call load event, button click, form submit, etc. -> all event handlers go through the event queue

console.log( 1 );

setTimeout(() => { // f1
    console.log( 2 );
}, 2000);

console.log( 3 );

// takes more than 10 seconds
for( let i = 0; i < 1e10; i++ ) {
    ;
}