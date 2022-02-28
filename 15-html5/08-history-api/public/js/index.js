import ContactPage from "./contact.js";
(function() {
    const routes = {
        '/home': {
            template: 'home',
            controller: null
        },
        '/contact': {
            template: 'contact',
            controller: ContactPage
        },
        '**': {
            template: 'page-not-found',
            controller: null
        }
    };

    const loadPage = ( pathname ) => {
        let tplId
        if(pathname in routes) {
            tplId = routes[pathname].template;
        }
        else {
            tplId = routes['**'].template;
        }
        const content = document.querySelector( '#' + tplId ).innerHTML;

        document.querySelector( '#root' ).innerHTML = content;

        // initialize the page
        if( pathname in routes ) {
            if( routes[pathname].controller ) {
                const page = new routes[pathname].controller();
                page.init();
            }
        }
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
    //handle popstate event(fired when back/forward button is clicked)
    window.addEventListener('popstate',function() {
        loadPage(location.pathname);
    });
})();