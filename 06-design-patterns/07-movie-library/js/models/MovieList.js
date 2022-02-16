function MovieList() {
    this.movies = [];
}

MovieList.prototype.add = function( movie ) {
    this.movies.push( movie );
}

MovieList.prototype.getMovies = function() {
    return this.movies;
}