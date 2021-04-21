export const redirect = () => window.location = 'https:///www.youtube.com/watch?v=dQw4w9WgXcQ';

export const formatRuntime = runtime => {
    let splittedRuntime = runtime?.toString().split('.');
    if (splittedRuntime) {
        const [hours, minutes] = splittedRuntime;
        return `${hours} hr ${minutes} min`;
    };
};

export const animateLoadingBar = imdb_rating => {
    const width = imdb_rating * 10 + '%';
    const loadingBarElement = document.querySelector('.movie-details-content-imdb-rating div span');
    
    if (loadingBarElement) {
        loadingBarElement.style.width = width;
        const keyframes = [{ width: '0%' }, { width }];
        const options = { duration: 2000, easing: 'ease' };
        loadingBarElement.animate(keyframes, options);
    };
};