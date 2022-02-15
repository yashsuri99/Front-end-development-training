/**
 * Communication Patterns
 * One part of the app does something fires events
 *      - Fetch the latest development in a cricket match and notify them
 * Another part of the app listens for events
 *      - Listen for notifications, and update the UI
 */

// Event names in the app
// Ball by Ball updates
// Innings Completed

// The EventBus is likely a middleman that facilitates communication between 2 parties
const EventBus = {
    events: {

    },
    publish(event,data) {
        if(this.events[event]) {
            this.events[event].forEach(fn => {
                fn(data);
            })
        }
    },
    subscribe(event, callback) {
        if(event in this.events) {  // some subscriber already exists for the event
            this.events[event].push(callback);
        }
        else {  // first time someone subscribe to the event
            this.events[event] = [callback];
        }
    }
};

// one piece of the app nedds to subscribe to ball by ball updates
EventBus.subscribe('BALL_BY_BALL_UPDATE', function(data){
    document.querySelector('.ball-by-ball-updates').innerHTML = data;
});

// EventBus.subscribe('BALL_BY_BALL_UPDATE', function(data){
//     document.querySelector('.ball-by-ball-updates').innerHTML = data;
// });

EventBus.publish('BALL_BY_BALL_UPDATE', 'Virat Kohli hits a 6');
EventBus.publish('BALL_BY_BALL_UPDATE', 'Rohit Sharma hits a 4');

console.log(EventBus);