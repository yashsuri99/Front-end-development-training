// [^A-Za-z0-9] -> anything except mentioned characters is included in the set
const str = 'abc?*& def&*()';

// Step 1.1: Use match with /[^A-Za-z0-9]+/ ) and check the first match
console.log( str.match( /[^A-Za-z0-9]+/g ) )


// Step 1.2: Use match with /[^A-Za-z0-9]+/ ) and check the length of the first match (it includes the space)