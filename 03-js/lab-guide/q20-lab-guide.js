const pushpa = {
    name: 'Pushpa',
    cast: [
        'Allu Arjun',
        'Rashmika'
    ],
    yearOfRelease: 2022,
    boxOfficeCollection: 100,
    addToCast(newMember) {
        this.cast.push(newMember);
    },
    addToCollection(amount) {
        this.boxOfficeCollection += amount;
    }
}

console.log(pushpa);
pushpa.addToCast('Sunil');
pushpa.addToCollection(50);

console.log(pushpa);