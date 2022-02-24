// i - ignore case (case-insenstive match - ignore the uppercase/lowercase differences with the pattern)

// Step 1: Using literal syntax - /^alert-/i
// i at the end dismisses the case sensitiveness
const alertPat = /^alert-/i;
console.log(alertPat.test("alert-success"));
console.log(alertPat.test("Alert-success"));
console.log(alertPat.test("Alert-Success"));

// Step 2: Using contructor syntax - 'i' flag as second argument
const alertPat1 = new RegExp("^alert-","i");

console.log(alertPat1.test("alert-success"));
console.log(alertPat1.test("Alert-success"));
console.log(alertPat1.test("Alert-Success"));