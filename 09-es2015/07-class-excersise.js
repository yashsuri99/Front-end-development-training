class Movie  {
    constructor(name,cast,yearOfRelease,boxOfficeCollection) {
        this.name = name;
        this.cast = cast;
        this.yearOfRelease = yearOfRelease;
        this.boxOfficeCollection = boxOfficeCollection;
    }

    addToCast(newMember) {
        this.cast.push(newMember)
    }

    collection(amount) {
        this.boxOfficeCollection += amount;
    }
}

const movie1 = new Movie('KGF',['a','b','c'],2016,400000);
movie1.addToCast('d');
movie1.collection(200000);
console.log(movie1);