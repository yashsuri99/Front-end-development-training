// old way of making Ajax call (HTTP request)
function ajax( method, url, data, onSuccess, onError ) {
    const xhr = new XMLHttpRequest();

    // when the Ajax call completes (event called 'load' fires on the xhr object)...
    xhr.addEventListener( 'load', function() {
        // 4 (Request COMPLETED)
        // console.log( xhr.readyState );

        // success code are < 400
        // Reference: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
        if( xhr.status < 400 ) {
            // JSON string
            let data;
            
            if( xhr.responseText ) {
                data = JSON.parse( xhr.responseText );
            }
            
            // the browser gets this data - pretty useless
            // return data;
            
            // our function gets the data - much better
            onSuccess( data );
        } else {
            onError( xhr.status, xhr.statusText );
        }
    });

    // configure the request
    // asynchronous request (the third argument - true, makes Ajax request asynchronous) - the execution continues even before the response can be recieved
    // if 3rd argument is false, then xhr.send() will block till a response is received
    xhr.open( method, url, true );

    
    // send the request
    // if( data === undefined )
    xhr.setRequestHeader( 'Authorization', 'Bearer ' + localStorage.getItem( 'TOKEN' ) );
    
    // to say we are sending JSON formatted data we add this header
    xhr.setRequestHeader( 'Content-Type', 'application/json' );

    if( data ) {
        // just make the call and proceed
        xhr.send( JSON.stringify( data ) );
    } else {
        xhr.send();
    }
}