/*
    Add tax of 18% on each items price - forEach(like for loop)
    Get an array of all items whose index is even - filter
    Get the first items whose manafacturer is 'One Plus' - find
    Get an array of the names of the phone - ['Samsung Galaxy S10','Apple iPhone 8'...] - map
*/

var phones = [
    {name: 'Samsung Galaxy S10', price: 620, type: 'refurished', manfacturer: 'Samsung' },
    {name: 'Apple iPhone 7', price: 450, type: 'refurished', manfacturer: 'Apple' },
    {name: 'OnePlus 6', price: 430, type: 'new', manfacturer: 'OnePlus' },
    {name: 'Apple iPhone XS', price: 910, type: 'new', manfacturer: 'Apple' },
    {name: 'OnePlus 7', price: 430, type: 'refurished', manfacturer: 'OnePlus' },
    {name: 'Apple iPhone 8', price: 610, type: 'new', manfacturer: 'Apple' }
];

phones.forEach(function(item,index) {
    item.price *= 1.18
});

console.log(phones);

//the function must return a boolean value
//if true is returned when a item is passed, that item is picked up
const evenIndexPhones = phones.filter(function(item,index){
    return index % 2 === 0;
});

console.log(evenIndexPhones);

const matchedItem = phones.find(function(item,index){
    return item.manfacturer === 'OnePlus';
});

console.log(matchedItem);

const conciseArray = phones.map(function(item){
    return {
        name: item.name,
        price: item.price
    };
});

console.log(conciseArray);