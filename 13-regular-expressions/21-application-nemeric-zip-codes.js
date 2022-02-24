// zip code is for US

// Step 1: Set up pin code validation for India
const pinCodePat = /^[1-6]\d{5}$/;
console.log( pinCodePat.test( "712345" ) );
console.log( pinCodePat.test( "612345" ) );
console.log( pinCodePat.test( "612345345" ) );