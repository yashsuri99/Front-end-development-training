//Js code is executed in 2 phases
//Phase 1: All functions using function declarationsyntax are created
//Phase 2: The code is executed from start to finish 

//This works
console.log('sum of 12 and 13 is', sum(13,13));

//Function declaration syntax - the function is created before any code is executed
function sum (x,y) {
    return (x+y);
};

//This does not work 
//console.log('sum of 12 and 13 is', sum2(12,13));

//function expression syntax - the function is created when this line of code is encountered during execution (phase2)
const sum2 = (function(x,y) {
    return (x+y);
});

console.log('sum of 12 and 13 is', sum2(12,13));