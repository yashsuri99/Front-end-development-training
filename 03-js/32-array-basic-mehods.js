/* 
    1.push at the start / end, remove at the start / end,
    2.push / remove items anywhere in between the array
    3.reverse the array items
    4.sort in some order
    5.concatenating strings
    6.what is an index of an item in the array?
    7.does an array include an item?
    8.join the array items into an string
*/

let nums = [1,2,3,4];
nums.unshift(0);
console.log(nums); // adds 0 to the left of array [0,1,2,3,4]

nums = [1,2,3,4];
nums.shift();
console.log(nums); // remove the first items and shifts remaining to the left [2,3,4]

// remove from the end of the array - pop()
nums = [1,2,3,4];
nums.pop();
console.log(nums); // [1,2,3]

// we wan to remove 4,5
// start index = 3
// number of items to remove
nums = [1,2,3,4,5,6,7,8];
nums.splice(3,2) // startIndex , number of items to remove
console.log(nums); // [1,2,3,6,7,8]

// adding 3,4,5,6 between 2 and 7
// startIndex = 2, number of items to remove = 0, items to add = 3,4,5,6
nums = [1,2,7,8,9];
nums.splice(2,0,3,4,5,6);
console.log(nums); // [1,2,3,4,5,6,7,8,9]

// slice() to get sub-array
// we want to get a sub array [3,4,5,6]
nums = [1,2,3,4,5,6,7,8,9,10];
console.log(nums.slice(2,6));

nums = [1,2,3,4,5,6,7,8,9,10];
console.log(nums.indexOf(3));
console.log(nums.indexOf(11));

nums = [1,2,3,4,5,6,7,8,9,10];
console.log(nums.includes(3));
console.log(nums.includes(11));

const line = 'Hello world, how are you';
const words = line.split(' ');
console.log(words);

for(let i=0; i<words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substring(1);
}
console.log(words);

//array join()
//join all the items in the words array and put a space between them
console.log(words.join(' '));

const places = [ 'Chennai' , 'Coimbatore' , 'Kanpur' , 'Delhi' , 'Dehradun' ];
places.sort();
console.log(places);

nums = [2,3,5,7,23,29,73,31,79,37];

//case1: x = 10, y = 20; 10-20 = -10; 10 will be placed after 20
//case2: x = 10, y = 10; 10-10 = 0;
//case3: x = 50, y = 30; 50-30 = 20; 50 will be placed after 30
nums.sort(function(x,y) {
    //you can create a function when you need it, and pass it as argument
    //we return a -ve numer if x comes before y
    //we return 0 if x and y are considred equal
    //we return 0 if x and y are considred equal
    return(x-y); 
    //if we do (y-x) thenit would sort in descending order
});
console.log(nums);

let months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
]

months.sort(function(x,y){
    if(x.length === y.length) {
        if(x>y) {
            return(+1);
        }
        else{
            return(-1);
        }
    }
    else {
        if(x.length>y.length) {
            return(+1);
        }
        else {
            return(-1);
        }
    }
})

console.log(months);