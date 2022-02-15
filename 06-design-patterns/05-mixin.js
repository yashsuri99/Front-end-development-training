/**
 * Mixin - a design pattern that brings multiple inheritance like features in a JS object
 */
 const john = {
    name: 'John',
    age: 32
};

for( let key in john ) {
    console.log( key, ':', john[key] );
}

// we use the for..in loop to "copy" the key-value pairs of multiple objects into 1 objects
const guitarist = {
    playSong( song ) {
        console.log( song );
    },
    changeStrings() {
        console.log( 'i change strings' );
    }
};

const cricketer = {
    bat() {
        console.log( 'bat bat bat' );
    },
    bowl() {
        console.log( 'bowl bowl bowl' );
    }
};

// copy over all guitarist methods and properties into person
function makeGuitarist( person ) {
    for( let key in guitarist ) {
        person[key] = guitarist[key];
    }
}

function makeCricketer( person ) {
    for( let key in cricketer ) {
        person[key] = cricketer[key];
    }
}

makeGuitarist( john );
makeCricketer( john );
john.playSong( 'Channa mereya' );
john.bat();

console.log( john );

const jane = {
    name: 'Jane',
    age: 28
};

makeGuitarist( jane );
jane.playSong( 'Bulleya' );

console.log( jane );