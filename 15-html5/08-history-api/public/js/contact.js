class ContactPage {
    /* create data members for DOM nodes */

    bindListeners() {
        console.log( 'to bind event listeners on contact page' );
    }

    init = () => {
        this.bindListeners()
    }
}

// in SPA there is no point running this on index.html page load
// Instead we need to run this on loadPage()
// const page = new ContactPage();
// document.addEventListener( 'DOMContentLoaded', page.init );

export default ContactPage;