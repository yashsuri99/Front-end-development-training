// dot represents 1 character - any character
const pat = /alert./g;
const str1 = 'text-bold alert-success';
const str2 = 'text-bold alert';

// Step 1: Use match on str1
console.log( str1.match( pat ) );

// Step 2: Use match on str2 (results in null - no match)
console.log( str2.match( pat ) );