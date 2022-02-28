let filterList: number[] = [];

const isOdd = (numbers: number[]) => {
    for(let x = 0; x<numbers.length; x++) {
        if(numbers[x] % 2 === 1){
            filterList.push(numbers[x]);
        }
    }
    return(filterList);
}

const filter = (array: number[],transform: Function) => {
    let result = transform(array);
    return(result);
}

let filteredList = filter([1,2,3,4,5,6,7,8],isOdd);
console.log(filteredList);