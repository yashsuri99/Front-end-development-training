// tuple is an array of fixed size, and fixed data type for every item
let state: [number,string];

state = [1,'hello'];
// state = ['hello',1];  // not all items are of specified type
// state = [1,'hello',3]; // cannot have 3 items

// Excersise: Create a tuple with first item a number, and second item a function that accepts a number and return nothing

let counter: [number, (params:number) => void ]

counter = [1, (x:number) => {console.log(x);}]
export{

}
