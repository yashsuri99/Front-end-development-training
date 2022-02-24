// we mentioned the 2 allowed 'signatures' of the function join this way
function join(x:number , y:number) : number;
function join(x:string , y:string) : string;
function join(x:string|number, y:string|number) {
    if(typeof x === 'number' && typeof y === 'number') {
        return(x+y);
    }

    if(typeof x === 'string' && typeof y === 'string') {
        return x + y
    }
}

console.log(join(12,13));
console.log(join('hello','world'));
// console.log(join(12,'world'));  -> does not match any of overload signatures

export {

}