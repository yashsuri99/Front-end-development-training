(function() {
    // Step 1: Create WebSocket object that listens on 'ws://localhost:3000' with 'echo-protocol'
    const ws = new WebSocket( 'ws://localhost:3000', 'echo-protocol' );
    
    // Step 2: Read the message and use send() to send it. Set it up to run on click of send button.
    document.querySelector( '#btn-send' ).addEventListener( 'click', function() {
        const message = document.querySelector( '#message' ).value;
        ws.send( message );
    });

    // Step 3: Listen for message event. Read data property of event object to get the message, and show it in the chatlog
    ws.addEventListener( 'message', function( { data } ) {
        document.querySelector( '#chatlog' ).innerHTML += `
            <div>${data}</div>
        `;
    });
})();