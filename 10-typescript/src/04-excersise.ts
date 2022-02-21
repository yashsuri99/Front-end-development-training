let squareNumbers: number[] = [];
let cubeNumbers: number[] = [];

const square = (numbers: number[]) => {
    for(let x = 0; x < numbers.length; x++) {
        squareNumbers.push(numbers[x]*numbers[x]);
    }
    return(squareNumbers);
}

const cube = (numbers: number[]) => {
    for(let x = 0; x < numbers.length; x++) {
        cubeNumbers.push(numbers[x]*numbers[x]*numbers[x]);
    }
    return(cubeNumbers);
}

const map = (array: number[], type: Function) => {
    let result = type(array);
    return(result);
}

let resultSquare = map([1,2,3,4],square);
let resultCube = map([1,2,3,4],cube);
console.log(resultSquare);
console.log(resultCube);

export {};