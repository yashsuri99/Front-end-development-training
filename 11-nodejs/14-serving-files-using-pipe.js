const http = require( 'http' );
const fs = require( 'fs' );
const path = require( 'path' );

// The request object (req) is a readable stream
// The response object (res) is a writable stream
const server = http.createServer(( req, res ) => {
    const rs = fs.createReadStream( path.join( __dirname, 'home.html' ), 'utf-8' );

    // rs.on( 'data', chunk => {
    //     res.write( chunk );
    // });

    // rs.on( 'end', () => {
    //     res.end();
    // });
    
    // rs.read();

    rs.pipe( res ); // readable_stream.pipe( writable_stream );
});

server.listen( 3000 );

server.on( 'listening', () => {
    console.log( 'Server started successfully - visit http://localhost:3000/' );
});

server.on( 'error', error => {
    console.log( error.message );
});