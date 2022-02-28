(function() {
    const routes = {
        '/': 'home',
        '/contact': 'contact'
    }

    const loadPage = ( pathname ) => {
        const content = document.querySelector( '#' + routes[pathname] ).innerHTML;

        document.querySelector( '#root' ).innerHTML = content;
    };

    loadPage( location.pathname );

    // get hold of all links on the page
    const routerLinks = document.querySelectorAll( '.router-link' );

    Array.from( routerLinks ).forEach(link => {
        link.addEventListener( 'click', function( event ) {
            // no server request will be made
            event.preventDefault();

            // change the URL without making a server request
            // history.pushState() does the trick!
            history.pushState( null, '', link.href );

            // load the new page based on the new url
            loadPage( location.pathname );
        });
    })
})();