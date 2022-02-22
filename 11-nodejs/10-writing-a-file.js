const fs = require( 'fs' );
const path = require( 'path' );

const filepath = path.join( __dirname, 'resume.md' );

let contents =
`
# Yash Suri

## About
Hi, My name is Yash. I am a web developer`;

fs.writeFile( filepath, contents, { encoding: 'utf-8', flag: 'a' }, ( error ) => {
    if( error ) {
        console.log( error.message );
        return;
    }

    console.log( 'Successfully written resume contents' );
});