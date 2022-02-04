var phones = [
    {name: 'Samsung Galaxy S10', price: 620, type: 'refurished', manfacturer: 'Samsung' },
    {name: 'Apple iPhone 7', price: 450, type: 'refurished', manfacturer: 'Apple' },
    {name: 'OnePlus 6', price: 430, type: 'new', manfacturer: 'OnePlus' },
    {name: 'Apple iPhone XS', price: 910, type: 'new', manfacturer: 'Apple' },
    {name: 'OnePlus 7', price: 430, type: 'refurished', manfacturer: 'OnePlus' },
    {name: 'Apple iPhone 8', price: 610, type: 'new', manfacturer: 'Apple' }
];

const namesArray = phones.map(function(item){
    return {
        name: item.name
    }
});

console.log(namesArray);

const newPhonesArray = phones.filter(function( item ) {
    return item.type === 'new';
}).map(function(item,index){
    return item.name
});

console.log(newPhonesArray);

const pricesArray = phones.filter(function(item,index){
    return item.price < 440
});

console.log(pricesArray);