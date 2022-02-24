/**
 * OBJECTIVES:
 * 1. To use event emitter to communicate some update in one part of the application in another part. In this case whenever SCORE_UPDATE occurs, the handler for it is called.
 * 2. To use event emitter to communicate an error using the specially named 'error' event ('error' event must always have a handler)
 */
 const fs = require( 'fs' );
 const path = require( 'path' );
 const startTracking = require( './19-publisher' );
 
 const filepath = path.join( __dirname, 'scores.txt' );
 
 ee = startTracking();
 
 // subscribe to the event 'SCORE_UPDATE' and do something whenever 'SCORE_UPDATE' event occurs
 ee.on( 'SCORE_UPDATE', data => {
     const { over, ball, runs } = data;
 
     fs.writeFile( filepath, `Over ${over} | Ball ${ball} | Runs scored: ${runs}\n`, { encoding: 'utf-8', flag: 'a' }, ( error ) => {
         if( error ) {
             console.log( error.message );
         }
     })
 });
 
 // error event must ALWAYS have a handler -> comment this code and check -> the program will stop when an 'error' event is thrown
 ee.on( 'error', error => {
     fs.writeFile( filepath, error.message + '\n', { encoding: 'utf-8', flag: 'a' }, ( error ) => {
         if( error ) {
             console.log( error.message );
         }
     })
 });