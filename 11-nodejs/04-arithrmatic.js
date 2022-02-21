const sum = ( x , y ) => x + y; // private
const diff = ( x , y ) => sum( x, -y ); // public
const multiply = ( x , y ) => x * y; // public
const divide = ( x , y ) => x / y; // private

// the value of module.exports is available in another module

// one way to export
// module.exports.diff = diff;
// module.exports.multiply = multiply;

// another way to export
module.exports = {
    diff,
    multiply
};

console.log( 'end of execution of arithmetic.js' );