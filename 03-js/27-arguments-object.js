function sumAll() {
    //argument is an object
    console.log(arguments);
    console.log(arguments["0"]);
    console.log(arguments["1"]);
    console.log(arguments["2"]);
    console.log(arguments["3"]);
    console.log('Number of arguments' , arguments.length);
}
/*
    {
        "0": 12,
        "1": 13
    }
*/
sumAll(12,13);

/*
    {
        "0": 12,
        "1": 13,
        "2": 14
    }
*/
sumAll(12,13,14);

/*
    {
        "0": 12,
        "1": 13,
        "2": 14,
        "3": 15
    }
*/
sumAll(12,13,14,15);