/**
 * OBJECTIVES:
 * 1. To create and start an HTTP server that responds with 'helloworld' on every HTTP request
 * 2. Understand that the server object is an 'event emitter', and how to handle 2 events - 'listening', and 'error' that are emitted by a server on different occasions.
 */
 const http = require( 'http' );

 const server = http.createServer(( req, res ) => {
     res.write( 'hello' );
     res.end( 'world' );
 });
 
 // listen() takes some time to start the server, but it is non-blocking (just like setTimeout) - the next line of code after listen() executes immediately
 server.listen( 3000 );
 
 server.on( 'listening', () => {
     console.log( 'Server started successfully - visit http://localhost:3000/' );
 });
 
 server.on( 'error', error => {
     console.log( error.message );
 });