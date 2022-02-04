let x = 1;
let y = 2;

console.log('x in global space =' , x);

function outer() {
    let y = 3;
    let w = 5;
    console.log('x in outer space =' , x);
    console.log('y in outer space =' , y);

    // inner can be called in outer
    function inner() {
        let y = 5;
        let z = 4;
        console.log('x in inner space =' , x);
        console.log('y in inner space =' , y);
        console.log('z in inner space =' , z);
        // inner can use a variable from the outer scope vice-versa not possible
        console.log('w in inner space =' , w);
    }
    inner();
    //console.log('z in outer space =' , z); // not ok - error
}

outer();