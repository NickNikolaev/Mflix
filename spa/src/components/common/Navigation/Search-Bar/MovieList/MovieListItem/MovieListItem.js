import { useHistory } from "react-router";
import { GET_MOVIE_BY_ID_ENDPOINT } from '../../../../../../services/api/movieEndpoints';
import './MovieListItem.css';

const MovieListItem = ({ _id, title }) => {
    const history = useHistory();

    const redirectToMovieDetails = () => history.push(GET_MOVIE_BY_ID_ENDPOINT(_id));

    return (
        <li className="movie-list-item" onClick={redirectToMovieDetails}>{title}</li>
    );
};

export default MovieListItem;