import { useState } from 'react';
import { useSelector } from 'react-redux';

import MovieList from '../MovieList/MovieList';
import { selectAllMovies } from '../../../../../app/selectors';
import { showMovieList, hideMovieList } from '../MovieList/helpers/movieListHelpers';
import './InputField.css';

const InputField = () => {
    const [searchTerm, setSearchTerm] = useState('');
    let movies = useSelector(selectAllMovies);

    const handleChange = event => setSearchTerm(event.target.value);

    // Filter Movies By Search Term
    movies = movies
        .filter(({ title }) => title.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
        <div className="input-field-wrapper">
            <input
                type="text"
                placeholder="Search For Movie..."
                className="input-field"
                onFocus={showMovieList}
                onBlur={hideMovieList}
                onChange={handleChange}
                value={searchTerm}
            />

            <MovieList movies={movies} />
        </div>
    );
};

export default InputField;