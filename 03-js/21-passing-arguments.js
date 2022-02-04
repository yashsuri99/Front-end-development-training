function sum(x,y,z=10) {
    return(x+y+z)
}

console.log(sum(12,13))
console.log(sum(12,13,14)) //25 we are able to pass less arguments

console.log(1 * 'hello') //NaN (Not a number)
console.log(12 + undefined)

let y; // undefined (a variable that is not initialized exolicitly is initialized with undefined)

console.log(sum(12)) //x -> 12 , y -> undefined, x+y -> NaN