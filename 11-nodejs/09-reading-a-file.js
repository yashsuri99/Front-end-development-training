/**
 * OBJECTIVES:
 * 1. To read a file using readFile
 * 2. Understand what a Buffer object is, and how to get a string for the text it represents
 * 
 * NOTE: utf-8 is the standard encoding for files these days. encoding for a file decides the conversion from text to bytes and vice-versa
 */
 const fs = require( 'fs' );
 const path = require( 'path' ); // to create platform-independent (Windows/Mac/Linux/...) paths
 
 // console.log( __dirname ); // path to directory of this file
 // console.log( __filename ); // path to this file
 
 const filepath = path.join( __dirname, 'hello.txt' );
 
 // asynchronous non-blocking
 // the function we pass to readFile() is called as soon as the file is read
 // if we do not pass the encoding of the file we get "raw bytes" (Buffer)
 fs.readFile( filepath, ( error, contents ) => {
     if( error ) {
         console.log( error.message );
         return;
     }
 
     // console.log( contents ); // raw bytes
 
     // Buffer objects have a method toString() to convert raw bytes to string
     console.log( contents.toString( 'utf-8' ) );
 });
 
 // if we specify an encoding as the second argument to readFile(), it will return a string as the file contents
 fs.readFile( filepath, 'utf-8', ( error, contents ) => {
     if( error ) {
         console.log( error.message );
         return;
     }
 
     console.log( contents );
 });
 
 console.log( 'end of script' );
 
 
 // function foo( x ) {
 //     console.log( x );
 // }
 
 // foo( 12, 13 )