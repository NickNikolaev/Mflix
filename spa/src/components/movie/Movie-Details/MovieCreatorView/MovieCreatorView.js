import './MovieCreatorView.css';
import { Link } from 'react-router-dom';

import { EDIT_ONE_MOVIE_ENDPOINT, DELETE_ONE_MOVIE_ENDPOINT } from '../../../../services/api/movieEndpoints';

const MovieCreatorView = ({ movieId }) => (
    <div className="movie-details-creator">
        <Link className="movie-details-creator-edit" to={EDIT_ONE_MOVIE_ENDPOINT(movieId)}>Edit Movie</Link>
        <Link className="movie-details-creator-delete" to={DELETE_ONE_MOVIE_ENDPOINT(movieId)}>Delete Movie</Link>
    </div>
);

export default MovieCreatorView;