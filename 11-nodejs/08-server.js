/**
 * OBJECTIVES:
 * 1. How to use path parameters
 * 2. How to use query parameters (pending)
 * 3. How to set response headers
 */
 const http = require( 'http' );
 const urlModule = require( 'url' );
 const meetings = require( './data/meetings.json' );
 const teams = require( './data/teams.json' );
 
 // returns an array of meetings whose name has the provided name as substring
 const searchByName = ( name ) => {
     return meetings.filter( item => item.name.toUpperCase().includes( name.toUpperCase() ) );
 }
 
 const server = http.createServer(( req, res ) => {
     const { url } = req;
     console.log( url );
 
     // 2nd argument is true if we want to parse the query string parameters
     const urlParts = urlModule.parse( url, true )
     console.log( urlParts );
 
     switch( urlParts.pathname ) {
         case '/meetings':
             // res.end( 'we will send meetings list' );
             res.setHeader( 'Content-Type', 'application/json' );
             if( urlParts.query.search ) {
                 const filteredMeetings = searchByName( urlParts.query.search );
                 res.end( JSON.stringify( filteredMeetings, null, 4 ) );
             } else {
                 res.end( JSON.stringify( meetings, null, 4 ) );
             }
             break;
         case '/teams':
             res.setHeader( 'Content-Type', 'application/json' );
             // res.end( 'we will send teams list' );
             res.end( JSON.stringify( teams, null, 4 ) );
             break;
         default:
             res.end( 'make a request to either /meetings or /teams' );
     }
 });
 
 server.listen( 3000 );
 
 server.on( 'listening', () => {
     console.log( 'Server started successfully - visit http://localhost:3000/' );
 });
 
 server.on( 'error', error => {
     console.log( error.message );
 });