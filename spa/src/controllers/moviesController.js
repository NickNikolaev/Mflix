import { Switch, Route } from 'react-router-dom';

import { ADD_MOVIE_ENDPOINT } from '../services/api/movieEndpoints';

import AddMovieForm from '../components/movie/Add-Movie-Form/AddMovieForm';
import MovieDetails from '../components/movie/Movie-Details/MovieDetails';
import EditMovieForm from '../components/movie/Edit-Movie-Form/EditMovieForm';
import DeleteMovie from '../components/movie/Delete-Movie/DeleteMovie';

const authController = () => (
    <Switch>
        <Route exact path={ADD_MOVIE_ENDPOINT} component={AddMovieForm} />
        <Route exact path="/movies/:movieId" component={MovieDetails} />
        <Route exact path="/movies/:movieId/edit" component={EditMovieForm} />
        <Route exact path="/movies/:movieId/delete" component={DeleteMovie} />
    </Switch>
);

export default authController;