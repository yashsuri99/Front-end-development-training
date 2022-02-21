let num: boolean;
const contains = (numbers: any[],value: number) => {
    for(let i = 0; i < numbers.length; i++) {
        if(numbers[i] === value) {
            num = true;
            return(num);
        }
    }
    num = false
    return(num);
}

let result = contains([1,'hello',3,'good'],3);
console.log(result);

export{};