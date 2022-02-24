// alternation - or operator in regex - alternatives
// better to put within parenthesis

// Step 1: Test 'abxy', 'cdxy', 'acxy'
const pat1 = /ab|cd|ef/g;
console.log( 'abxycd'.match( pat1 ) );
console.log( 'cdxy'.match( pat1 ) );
console.log( 'acxy'.match( pat1 ) );

const pat2 = /(ab|cd|ef)+/g; // ab|cd|ef is repeated multiple times
// Use match() on 'ababxy', 'abcdxy', 'abxycd' 'abcdefabefxyabcdabcdef'
console.log( 'ababxy'.match( pat2 ) );
console.log( 'abcdxy'.match( pat2 ) );
console.log( 'abxycd'.match( pat2 ) );
console.log( 'abcdefabefxyabcdabcdef'.match( pat2 ) );