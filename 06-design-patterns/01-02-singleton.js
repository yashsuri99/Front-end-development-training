/**
 * OBJECTIVE: To be able to create only 1 object of the class
 */
 const Notification = (function() {

    // Reference: JSDoc
    /**
     * Creates a Message object
     * @param {string} text The text of the the message
     * @param {string} type One of 'success' | 'error' | 'info'
     */
    function Message( text, type ) {
        this.text = text;
        this.type = type;
    }

    Message.prototype.show = function() {
        // console.log( this ); // message object

        const messageContainer = document.querySelector( '.message-container' );

        messageContainer.innerHTML = `
            <div class="message message-${this.type}">${this.text}</div>
        `;

        // its is important to use arrow function here as "this" must be the same as in the show() method
        setTimeout(() => {
            this.hide();
        }, 3000);
    };

    Message.prototype.hide = function() {
        const messageContainer = document.querySelector( '.message-container' );

        messageContainer.innerHTML = ``;
    };

    Message.prototype.set = function( text, type ) {
        this.text = text;
        this.type = type;
    };

    let instance = null;

    return {
        getInstance( text, type ) {
            // this "if" statement is true only the first time
            // an instance is created only the first time
            // other times, the already created instance is returned
            if( instance === null ) {
                instance = new Message( text, type );
            } else {
                instance.set( text, type );
            }

            return instance;
        }
    };
})();