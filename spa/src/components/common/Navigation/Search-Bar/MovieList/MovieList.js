import MovieListItem from './MovieListItem/MovieListItem';
import './MovieList.css';

const MovieList = ({ movies}) => {

    const generateMovieItems = () =>
        movies.map(({ _id, title }) =>
            <MovieListItem _id={_id} title={title} />);

    return (
        <ul className="movie-list">
            {generateMovieItems()}
        </ul>
    );
};

export default MovieList;