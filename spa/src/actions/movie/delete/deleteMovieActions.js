import axios from "axios";
import { BASE_URL } from "../../../config/config";
import { DELETE_ONE_MOVIE_ENDPOINT } from "../../../services/api/movieEndpoints";

export const deleteOneMovie = (movieId, userId) =>
    axios.delete(BASE_URL + DELETE_ONE_MOVIE_ENDPOINT(movieId), { params: { userId } });