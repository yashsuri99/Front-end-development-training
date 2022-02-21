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

class SequelMovie extends Movie {
    constructor(name,cast,yearOfRelease,boxOfficeCollection,earlierMovies) {
        super(name,cast,yearOfRelease,boxOfficeCollection);
        this.earlierMovies = earlierMovies;
    }

    getLifetimeEarnings(boxOfficeCollection) {
        const earning = earning + this.boxOfficeCollection;
        return(earning);
    }
}

const movie1 = new Movie('KGF',['a','b','c'],2016,400000);
const movie2 = new SequelMovie('KGF2',['a','b','c','d'],2018,400000,[movie1]);
movie1.addToCast('d');
movie1.collection(200000);
const total = movie2.getLifetimeEarnings();
console.log(movie1);
console.log(movie2);