/**
 * bind helps us create a version of function which gets called with a fixed set of arguments (some arguments)
 */
function ajax(baseUrl, endpoint, method, queryString) {
    console.log(`${method} ${baseUrl}/${endpoint}?${queryString}`);
}

// get teams
// ajax('https://mymeetingsapp.herokuapp.com/api', 'teams' , 'GET')

// adding a member to a team
// ajax('https://mymeetingsapp.herokuapp.com/api', 'teams' , 'PATCH', 'action=add_member')

// excuse yourself from a team
// ajax('https://mymeetingsapp.herokuapp.com/api', 'teams' , 'PATCH', 'action=excus_yourself')

ajax('https://mymeetingsapp.herokuapp.com/api', 'teams' , 'PATCH', 'action = add_member');

// bind() is a function that is used to creat a "similar" function
// bind(context, arg1, arg2, ...) returns a similar function
const teamsAjax = ajax.bind(null, 'https://mymeetingsapp.herokuapp.com/api', 'teams');

// we donot pass baseUrl, endpoint
// we pass only the method, queryString
teamsAjax('PATCH' , 'action=add_member');
teamsAjax('GET');

// Create another similar ajax() function where baseUrl is the meetings appbaseUrl, and endpoint is meeyings. Use it to make 2 diffrent requests

