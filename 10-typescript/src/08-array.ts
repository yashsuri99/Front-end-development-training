let prices: number[] = [];
prices.push(100);
prices.push(200);

type Rating = 1 | 2 | 3 | 4 | 5;

let productRatings: Rating[] = [];

productRatings.push(1);
productRatings.push(4);

// productRatings.push(6);  error because value cannot be 6

// what is the difference between these 3 types?

let x: number | string[];
let y: (number | string)[];
let z: number[] | string[];

export{};