const getMovieListItem = () => document.querySelector('.movie-list');

export const showMovieList = () => {
    // Remove Hide Class and Add Show One
    const movieListElement = getMovieListItem();
    movieListElement.classList.remove('hide');
    movieListElement.classList.add('show');

    // After Animation Starts Show Movie List
    movieListElement.addEventListener('animationstart', () => {
        if (movieListElement.classList.contains('show')) movieListElement.style.visibility = 'visible'
    });
};

export const hideMovieList = () => {
    // Remove Show Class and Add Hide One
    const movieListElement = getMovieListItem();
    movieListElement.classList.remove('show');
    movieListElement.classList.add('hide');

    // After Animation Ends Hide Movie List
    movieListElement.addEventListener('animationend', () => {
        if (movieListElement.classList.contains('hide')) movieListElement.style.visibility = 'hidden';
    });
};