const sum = (x,y) => x+y;
const square = x => x*x;
const distance = (a,b) => Math.sqrt(sum(square(a),square(b)));

const dist = distance(3,4);
console.log(dist);

/**
 * Function call stack
 * When a function is called an entry is added to the top of the stack
 * When a function returns , its entry is popped of the stack
 * square(3) is called and it returns 3
 * distance calls square(a) (line 3)
 * Global code executing and calling distance (line 5)
 */