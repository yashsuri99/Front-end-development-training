// ? -  0 or 1 occurence of preceding character
// \. - metasymbol (we have to escape certain characters like . because they have special meaning in regex)

const pat = /\.s?css/;
const filename1 = 'app.scss';
const filename2 = 'reset.css';
const filename3 = 'reset.sscss';

// Step 1: Use test on filename1 - true
console.log( pat.test( filename1 ) );

// Step 2: Use test on filename2 - true
console.log( pat.test( filename2 ) );

// Step 3: Use test on filename3 - false
console.log( pat.test( filename3 ) );