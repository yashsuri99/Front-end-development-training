/**
 * OBJECTIVE: To copy files using streams
 * 
 * For more information on flow control : https://nodejs.org/en/docs/guides/backpressuring-in-streams/
 */
 const fs = require( 'fs' );
 const path = require( 'path' );
 
 const rs = fs.createReadStream( path.join( __dirname, 'home.html' ) );
 const ws = fs.createWriteStream( path.join( __dirname, 'house.html' ) );
 
 // one way to copy
 // rs.on( 'data', chunk => {
 //     ws.write( chunk );
 // });
 
 // rs.on( 'end', chunk => {
 //     ws.end();
 // });
 
 // rs.read();
 
 // another way to copy
 rs.pipe( ws );