/**
 * OBJECTIVE: To zip files using transform streams
 * 
 * For more information on zipping : https://nodejs.org/dist/latest-v16.x/docs/api/zlib.html
 * 
 * EXERCISE: Explore how to use createGunzip() to unzip zipped files
 */
 const fs = require( 'fs' );
 const path = require( 'path' );
 const zlib = require( 'zlib' );
 
 const rs = fs.createReadStream( path.join( __dirname, 'home.html' ) );
 const gzip = zlib.createGzip();
 const ws = fs.createWriteStream( path.join( __dirname, 'home.html.zip' ) );
 
 // Read from home.html -> write to the gzip stream
 // gzip produces compressed text
 // Read from the gzip stream (compressed text) and write to home.html.zip
 rs.pipe( gzip ).pipe( ws );