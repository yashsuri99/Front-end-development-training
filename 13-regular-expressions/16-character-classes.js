// /6789/ -> 6 followed by 7 followed by 8 followed by 9
// [6789] -> any one character from the set given inside [] -> forms set (character class)
// \d -> same as [0-9]
// \w -> alphanumeric character -> [A-Za-z0-9_]
// \W -> not alphanumeric character -> [^A-Za-z0-9_]
// \s -> matches whitespace (like tab, newline, space)

console.log( /^\d+$/.test( "123" ) ); // true

// Steps: Try similar patterns - /^[6789]\d{9}$/ (mobile phone), /^\w+/ (first word)

console.log( "hello world".match( /\w+/g ) );