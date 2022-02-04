let count = 1;
let s = "";
for(let i=1; i<=5; i++) {
    for (let j=1; j<=i; j++) {
        s += count + " ";
        count++;
    }
    s += "\n";
}
console.log(s);