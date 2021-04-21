import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import MovieCard from '../movie/MovieCard/MovieCard';
import './Home.css';
import { fetchAllMovies } from '../../actions/movie/movieActionCreators';
import { fetchAll } from '../../actions/movie/fetch/fetchMovieActions';

const Home = () => {
    let [movies, setMovies] = useState([]);
    const dispatch = useDispatch();

    useEffect(async () => {
        try {
            movies = await fetchAll();
            setMovies(movies);
            dispatch(fetchAllMovies(movies));
        } catch (error) { throw error };
    }, []);

    const allMoviesElement = movies.map(movie => <MovieCard {...movie} />);

    const noMoviesStyle = { color: "white", fontSize: "50px" };
    const noMoviesElement = <h1 style={noMoviesStyle}>No Movies Yet. Go And Add One</h1>;

    return (
        <div className="home">
            {movies.length > 0 ? allMoviesElement : noMoviesElement}
        </div>
    );
};

export default Home;