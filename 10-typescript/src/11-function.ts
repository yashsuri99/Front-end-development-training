// there are 2 ways to specify function types

// First Way
// explicitly specify return type
const sum = (x : number, y : number) : number => {
    return x+y;
};

// Typescript infers that when 2 numbers are multiplied only a number can be the result, and thus the return is a number - so we do not specify the      return type explicitly
const product = (x: number , y: number) => {
    return(x*y);
};

// Second Way - useful when we want to pass function as an argument / return value
// const divide : (x: number, y: number) => number = (x,y) => x/y;

type BinaryFunction = (x: number, y: number) => number;
const divide : BinaryFunction = (x,y) => x/y;
const subtract : BinaryFunction = (x,y) => x-y;

const ajax = (url: string, method: 'GET' | 'POST', onSuccess: (data : object) => void) => {
    const data = {name: 'AWS architecture'};
    onSuccess(data);
}

export {};