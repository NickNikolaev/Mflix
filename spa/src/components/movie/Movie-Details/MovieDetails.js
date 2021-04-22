import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";

import MovieCreatorView from './MovieCreatorView/MovieCreatorView';
import './MovieDetails.css';

import { fetchOne } from '../../../actions/movie/fetch/fetchMovieActions';
import { fetchOneMovie } from '../../../actions/movie/movieActionCreators';
import { redirect, formatRuntime, animateLoadingBar } from './helpers/movieDetailsHelperFuncs';
import determineMovieCreator from '../../../services/movie/determineMovieCreator';
import { isMovieCreatorAction } from '../../../actions/auth/authActionCreators';
import { selectUser } from '../../../app/selectors';
import getAuthData from '../../../services/common/getAuthData';

const MovieDetails = () => {
    const [movie, setMovie] = useState({});
    const dispatch = useDispatch();

    const { movieId } = useParams();
    const { isMovieCreator } = useSelector(selectUser);

    const { title, year, director, runtime, description, imdb_rating, imageUrl } = movie;

    useEffect(() =>
        fetchOne(movieId)
            .then(movie => {
                debugger
                // Set and Update Movie State
                setMovie(movie);
                dispatch(fetchOneMovie(movie));

                // Determine If The User Is Movie Creator
                let user_id;
                if (getAuthData()) user_id = getAuthData()._id;

                const movieCreator = determineMovieCreator(movie.creator_id, user_id);
                dispatch(isMovieCreatorAction(movieCreator));
            }), []);

    return (
        <section className="movie-details">
            <article className="movie-details-content">
                <h1 className="movie-details-content-title">{title}</h1>
                <span className="movie-details-content-year">{year}</span>
                <p className="movie-details-content-director">Directed by: <span>{director}</span> </p>
                <p className="movie-details-content-runtime">Runtime: <span>{formatRuntime.call(this, runtime)}</span> </p>
                <p className="movie-details-content-description">{description}</p>
                <div className="movie-details-content-imdb-rating">
                    <p>IMDB Rating: {imdb_rating}</p>
                    <div>
                        <span>{animateLoadingBar.call(this, imdb_rating)}</span>
                    </div>
                </div>

                {isMovieCreator ? <MovieCreatorView movieId={movie._id} /> : null}
            </article>

            <article className="movie-details-image-wrapper">
                <img src={imageUrl} alt={title} />
                <div>
                    <button className="btn" onClick={redirect}>Watch Movie</button>
                </div>
            </article>
        </section>
    );
};

export default MovieDetails;