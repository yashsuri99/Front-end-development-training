// Left as exercise (more reference can be found in topics.md file in this folder)

// - [How to validate an email address in JavaScript](https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript)
// - [JavaScript: HTML Form - email validation](https://www.w3resource.com/javascript/form/email-validation.php)
// - [Validate Credit Card Numbers](https://www.oreilly.com/library/view/regular-expressions-cookbook/9781449327453/ch04s20.html)
// - [Use RegEx To Analyze Credit Card Numbers In JavaScript](https://www.thepolyglotdeveloper.com/2015/06/use-regex-to-analyze-credit-card-numbers-in-javascript/)
// - [Credit card input validation using regular expression in JavaScript](https://stackoverflow.com/questions/40775674/credit-card-input-validation-using-regular-expression-in-javascript)

// A-Z a-z / 0-9 (not first letter) followed by sapient.com or publicissapient.com
const email = /^[A-Za-z][[\.a-zA-Z0-9]+@sapient.com$|@publicissapient.com$/;
console.log(email.test('yash1@sapient.com'));
console.log(email.test('1yash@sapient.com'));
console.log(email.test('yash@gmail.com'));
console.log(email.test('yash@publicissapient.com'));
console.log(email.test('1yash@publicissapient.com'));
console.log(email.test('publicssapient.com'));