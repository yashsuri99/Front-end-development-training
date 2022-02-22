const fs = require( 'fs' );
const path = require( 'path' );

const filepath = path.join( __dirname, 'home.html' );

const ws = fs.createWriteStream( filepath );

// chunk 1
ws.write( 
`
<!doctype html>
<html>
    <head>
        <title>Home</title>
    </head>
`
);

// chunk 2
ws.write(
`
    <body>
        Welcome to my home
    </body>
</html>
`
);

ws.end();

ws.on( 'end', () => {
    console.log( 'file has been written' );
});