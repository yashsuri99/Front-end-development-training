// Reference: https://stackoverflow.com/questions/4374822/remove-all-special-characters-with-regexp
const specialChars = /[^\w\s]/gi

// Step 1: You can use /[^\w\s]/gi to remove special characters (replace matches with '')
const str = '^&%bb u #@~+-wd0';
console.log( str.replace( /[^\w\s]/gi, '' ) );