(function() {
    // are we online or offline?
    if( navigator.onLine ) {
        alert( 'You are online' );
    } else {
        alert( 'You are offline' );
    }

    // let us detect change from online to offline / offline to online
    window.addEventListener( 'online', function() {
        document.querySelector( '#status' ).textContent = 'online';
    });

    window.addEventListener( 'offline', function() {
        document.querySelector( '#status' ).textContent = 'offline';
    });
})();