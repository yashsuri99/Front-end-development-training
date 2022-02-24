const EventEmitter = require( 'events' );

let over = 25, ball = 3;

const getScoreUpdate = () => {
    const update = {
        over,
        ball,
        runs: Math.floor( Math.random() * 7 ) // between 0 - 6
    };

    ball = 1 + ( ball % 6 ); // 1, 2, 3, 4, 5, 6, 1, 2, 3, ...
    if( ball === 1 ) {
        over++;
    }

    if( update.ball === 3 ) {
        throw new Error( 'Unable to fetch update' );
    }

    return update;
};

function startTracking() {
    const ee = new EventEmitter();

    // got a score update in one part of the app
    // publish an event called 'SCORE_UPDATE'
    setInterval(() => {
        try {
            ee.emit( 'SCORE_UPDATE', getScoreUpdate() );
        } catch( error ) {
            ee.emit( 'error', error );
        }
    }, 5000);

    return ee;
}

module.exports = startTracking;