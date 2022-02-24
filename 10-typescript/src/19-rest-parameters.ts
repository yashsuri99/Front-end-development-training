const sumAll = (...args: number[]) => {
    return args.reduce((acc,item) => acc + item,0);
} 

console.log(sumAll(12,13,14,15));