// class Promise {
//     constructor( fn ) {
//         fn( () => {}, () => {} )
//     }
// }

const sum = ( x, y ) => {
    return new Promise(( resolve, reject ) => {
        setTimeout(() => {
            const result = x + y;
            resolve( result ); // Hey promise! Here is the result
        }, 2000);
    });
}

// -------- Promise ----------

// Exercise

const sum1 = (x, y) =>{
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
        const result = x + y;
        resolve(result);
        },2000);
    });
}

sum1(12, 13)
    .then(result=>{
        console.log(result);

        return sum(result, 14);
    })
    .then(result2 =>{
        console.log(result2);

        return sum(result2, 15);
    })
    .then(result3=>{
        console.log(result3);
    });
