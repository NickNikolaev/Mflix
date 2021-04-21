import './MovieCard.css';
import { Link } from 'react-router-dom';
import { GET_MOVIE_BY_ID_ENDPOINT } from '../../../services/api/movieEndpoints';

const MovieCard = ({ _id, title, year, imageUrl, imdb_rating }) => (
    <div className="movie-card">
        <div className="movie-card-image-wrapper">
            <img src={imageUrl} alt={title} />
            <Link to={GET_MOVIE_BY_ID_ENDPOINT(_id)}>Movie Details</Link>
        </div>
        <h5 className="movie-card-title">{title}</h5>
        <span className="movie-card-year">{year}</span>
        <span className="movie-card-imdb-rating">IMDB: {imdb_rating} / 10</span>
    </div>
);



export default MovieCard;