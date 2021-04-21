import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import './EditMovieForm.css';

import useFormManagement from '../../../hocs/useFormManagement';
import movieModel from '../../../models/movie/movieModel';

import { fetchOne } from '../../../actions/movie/fetch/fetchMovieActions';
import { editOneMovie } from '../../../actions/movie/edit/editMovieActions';

const EditMovieForm = () => {
    const [inputFieldsElement, handleSubmit, setForm] = useFormManagement(movieModel, editOneMovie);
    const { movieId } = useParams();

    useEffect(() => fetchOne(movieId)
        .then(movie => {
            const { title, year, director, runtime, description, imageUrl, imdb_rating } = movie;
            setForm({ title, year, director, runtime, description, imageUrl, imdb_rating });
        }), []);

    return (
        <div className="form-wrapper">
            <form className="form edit-movie" onSubmit={handleSubmit}  >
                <h3 className="form-title">Edit Movie</h3>
                <p className="form-subtitle">Fill out the form below.</p>

                <div className="form-fields">
                    {inputFieldsElement}
                </div>

                <button className="btn form-btn">Edit</button>
            </form>
        </div>
    );
};

EditMovieForm.propTypes = {
    form: PropTypes.shape({
        title: PropTypes.string.isRequired,
        year: PropTypes.number.isRequired,
        director: PropTypes.string.isRequired,
        runtime: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
        imdb_rating: PropTypes.number.isRequired,
    }).isRequired
};

export default EditMovieForm;