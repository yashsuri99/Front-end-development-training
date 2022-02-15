/**
 * We expect some code to fail
 */
// addListener() is a method defined in another file
// Generally when some error occurs, the runtime throws an error, and stops the execution of rest of the code
// tryblock contains the code that is expected to fail sometimes
// catch block has the code regarding what is to be done when there is a failure (if there is no failure, the catch doesn't execute)
// The error is thus "handled" and the execution continues beyond the try..catch
try {
    addListener();
}
catch(error) {
    console.log("inside first catch");
    console.log(error.message);
}

console.log('after call to addListener');

function sum(x,y) {
    return(x+y);
}

try {
    console.log(sum(12,13));
}
catch(error) {
    console.log("inside second catch");
    console.log(error.message);
}

console.log('after call to addListener');