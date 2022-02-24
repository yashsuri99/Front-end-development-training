// string has only whitespace character (basically empty)

// Step 1: Test this pattern against '   \t\r  ' and '   \ta\r  '
const pat = /^\s*$/;
const str1 = `
        \t
`;
const str2 = `
    a
        \t
`;
console.log( pat.test( str1 ) ); // true
console.log( pat.test( str2 ) ); // false

// Step 2: Instead of using regex you can easily test using trim() method of strings
// Trim the strings '   \t\r  ' and '   \ta\r  ' and check if they are empty
console.log( str1.trim() === '' ); // true
console.log( str2.trim() === '' ); // false