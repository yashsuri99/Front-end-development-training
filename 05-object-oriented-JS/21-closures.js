/**
 * OBJECTIVE: Each inner function's closure consists of a the local variables of the enclosing function that were created when that enclosing function was called
 */
// every time we call getAjax() a new inner function is created
function getAjax( baseUrl, endpoint ) {
    const protocol = 'https';

    // create a new function and return it
    return function( method, queryString ) {
        console.log( `${method} ${protocol}://${baseUrl}/${endpoint}?${queryString}` );
    };
}

// each of these 3 functions uses a separate copy of baseUrl and endpoint
const teamsAjax = getAjax( 'mymeetingsapp.herokuapp.com/api', 'teams' );
const meetingsAjax = getAjax( 'mymeetingsapp.herokuapp.com/api', 'meetings' );
const workshopsAjax = getAjax( 'workshops-server.herokuapp.com', 'workshops' );

teamsAjax( 'PATCH', 'action=add_member' );
teamsAjax( 'GET' );

meetingsAjax( 'POST' );
workshopsAjax( 'GET', '_page=2' );