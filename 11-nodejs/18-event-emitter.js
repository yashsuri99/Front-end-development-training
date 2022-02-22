/**
 * Some event emitter objects in Node JS - these are objects that fire events - the on() method is used to handle events fired on them
 * 1. File readable stream
 * 2. File writable stream
 * 3. The HTTP server object
 * 
 * NOTE: You are losing time on Meetings app :)
 */
 const EventEmitter = require( 'events' );
 const fs = require( 'fs' );
 const path = require( 'path' );
 
 const ee = new EventEmitter();
 
 // another part of the app wants to do something when there is a score update
 // Example: We want to log the score to a file
 const filepath = path.join( __dirname, 'scores.txt' );
 
 ee.on( 'SCORE_UPDATE', ( data ) => {
     const { over, ball, runs } = data;
 
     fs.writeFile( filepath, `Over ${over} | Ball ${ball} | Runs scored: ${runs}\n`, { encoding: 'utf-8', flag: 'a' }, ( error ) => {
         if( error ) {
             console.log( error.message );
         }
     })
 });
 
 // got a score update in one part of the app
 ee.emit( 'SCORE_UPDATE', {
     over: 25,
     ball: 3,
     runs: 2
 });