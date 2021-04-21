import PropTypes from 'prop-types';
import './AddMovieForm.css';

import useFormManagement from '../../../hocs/useFormManagement';
import movieModel from '../../../models/movie/movieModel';
import { addMovie } from '../../../actions/movie/add-movie/addMovieActions';

const AddMovieForm = () => {
    const [inputFieldsElement, handleSubmit] = useFormManagement(movieModel, addMovie);

    return (
        <div className="form-wrapper">
            <form className="form add-movie" onSubmit={handleSubmit}  >
                <h3 className="form-title">Add Movie</h3>
                <p className="form-subtitle">Fill out the form below.</p>

                <div className="form-fields">
                    {inputFieldsElement}
                </div>

                <button className="btn form-btn" >Add</button>
            </form>
        </div>
    );
};

AddMovieForm.propTypes = {
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

export default AddMovieForm;