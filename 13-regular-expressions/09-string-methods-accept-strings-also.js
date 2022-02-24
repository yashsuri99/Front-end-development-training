// The first argument to String replace() can be regular expression or a plain string too

// Step 1: Replace 'world' with 'universe' and check
const str = 'Hello world 123 and 456 universe';

const pat = new RegExp( "\\d{1,}", "g" ); // /\d{1,}/g

console.log( str.replace( pat, 'and' ) );