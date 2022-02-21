let numbers: number[] = [];
let sum: number = 0;
const sumArray = (numbers: number[]) => {
    for(let x = 0; x < numbers.length; x++) {
        sum += numbers[x];
    }
    return(sum);
}

let result = sumArray([1,2,3,4]);
console.log(result);