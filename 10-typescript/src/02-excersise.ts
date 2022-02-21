let squareNumbers: number[] = [];
const squareEach = (numbers: number[]) => {
    for(let x = 0; x < numbers.length; x++) {
        squareNumbers.push(numbers[x]*numbers[x]);
    }
    return(squareNumbers);
}

let result = squareEach([1,2,3,4]);
console.log(result);

export{};