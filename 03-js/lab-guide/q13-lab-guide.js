let x = 3;
let y = 5;

var result1 = contain([1,2,3,4],x);
var result2 = contain([1,2,3,4],y);
console.log(result1);
console.log(result2);

function contain(arr,i) {
    let inArray = 0;
    for(let j=0; j<arr.length; j++) {
        if(arr[j] === i) {
            inArray = 1;
        }
    }
    if(inArray === 1) {
        return('True');
    }
    else if(inArray === 0) {
        return('False');
    }
}