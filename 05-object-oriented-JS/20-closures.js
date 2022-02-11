function getAjax(baseUrl, endPoint) {
    const protocol = 'https';
    return function(method, queryString){
        console.log(`${method} ${protocol}://${baseUrl}/${endPoint}?${queryString}`)
    }
}

const teamsAjax = getAjax('mymeetingsapp.herokuapp.com/api', 'teams');

teamsAjax('PATCH', 'action=add_member');
teamsAjax('GET')