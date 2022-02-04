function sum(x,y,transform) {
    return(transform(x) + transform(y));
}

function square (x) {
    return(x*x);
}

function cube (x) {
    return(x*x*x);
}

console.log(sum(4,5,square));
console.log(sum(4,5,cube));