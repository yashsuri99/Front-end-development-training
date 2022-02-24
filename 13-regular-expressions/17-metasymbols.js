// Meta symbols (not a standard term in JS regular expressions)
// Like escape sequences in languages
// \n, \t, \r

const poem = `
Sails flashing to the wind like weapons,
sharks following the moans the fever and the dying;
horror the corposant and compass rose.
`;

console.log( poem.match( /\n/g ) );