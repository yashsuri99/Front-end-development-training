const movieList = new MovieList();

function showMovieList() {
    const moviesListTbody = document.querySelector( '#movies-list tbody' );

    moviesListTbody.innerHTML = '';
    movieList.getMovies().forEach(movie => {
        moviesListTbody.innerHTML += `
            <tr>
                <td>${movie.name}</td>
                <td>${movie.year}</td>
            </tr>
        `
    });
}

function init() {
    ajax(
        'GET',
        'http://localhost:8081/movies.json',
        null,
        function( moviesArray ) {
            console.log( moviesArray );

            moviesArray.forEach(movie => {
                movieList.add( new Movie( movie.name, movie.year ) );
            });

            showMovieList();
        },
        function( error ) {
            console.log( error.message );
        }
    );
}

document.addEventListener( 'DOMContentLoaded', init );