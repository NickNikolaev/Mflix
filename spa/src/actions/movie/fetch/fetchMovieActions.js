import axios from 'axios';
import { BASE_URL } from '../../../config/config';
import { HOME_ENDPOINT } from '../../../services/api/homeEndpoints';
import { GET_MOVIE_BY_ID_ENDPOINT } from '../../../services/api/movieEndpoints';

export const fetchAll = () =>
    axios.get(BASE_URL + HOME_ENDPOINT)
        .then(({ data }) => data.responseData);

export const fetchOne = movieId =>
    axios.get(BASE_URL + GET_MOVIE_BY_ID_ENDPOINT(movieId))
        .then(({ data }) => data.responseData);