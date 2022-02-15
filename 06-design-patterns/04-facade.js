/**
 * Facade: Provide a uniform interface for something that does not have a uniform interface
 * jQuery library employes this pattern a lot
 * IE8 - used attachEvent instead of addEventListener
 */

// addListener() method checks which browser the code is running on, and calls the appropriate method
function addListener( domNode, eventName, callback ) {
    if( window.addEventListener ) {
        domNode.addEventListener( eventName, callback );
    } else {
        // document.getElementById( 'btn-click' ).attachEvent( 'onclick', function() {
        //     alert( 'clicked' );
        // });
        domNode.attachEvent( 'on' + eventName, callback );
    }
}