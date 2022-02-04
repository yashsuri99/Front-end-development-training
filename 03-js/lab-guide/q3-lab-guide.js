let s = "";
for(let i=1; i<=5; i++) {
    for (let j=1; j<=i; j++) {
        s += j + " ";
    }
    s += "\n";
}
console.log(s);