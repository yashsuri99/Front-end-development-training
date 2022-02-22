const fs = require( 'fs' );
const path = require( 'path' );

const filepath = path.join( __dirname, '11-large-file.pdf' );

// stream is used especially for large file
const rs = fs.createReadStream( filepath, 'utf-8' );

rs.on( 'data', chunk => {
    console.log( '***' );
    // console.log( chunk );
});

rs.on( 'end', () => {
    console.log( '*** The End ***' );
});

// start reading the file
rs.read();