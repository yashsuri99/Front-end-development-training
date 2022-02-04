const numbers = [ 1,2,3,4,5,6 ];
console.log( numbers.length );

numbers[0] += 1
console.log(numbers);

numbers[numbers.length-1] = numbers[numbers.length - 1] + numbers[numbers.length - 2]
console.log( numbers );

numbers.push(7);
console.log( numbers );

const copy = []

for( let i = 0; i<numbers.length; i++) {
    copy[i] = numbers[i];
}

console.log(copy);