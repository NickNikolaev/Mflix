import { INVALID_FORMAT_IMAGE_URL, INVALID_TYPE_DESCRIPTION, INVALID_TYPE_DIRECTOR, INVALID_TYPE_IMAGE_URL, INVALID_TYPE_IMDB_RATING, INVALID_TYPE_RUNTIME, INVALID_TYPE_TITLE, INVALID_TYPE_YEAR, MAXIMAL_RANGE_IMDB_RATING, MAXIMAL_RANGE_RUNTIME, MAXIMAL_RANGE_YEAR, MINIMAL_RANGE_IMDB_RATING, MINIMAL_RANGE_RUNTIME, MINIMAL_RANGE_YEAR, SHORT_DESCRIPTION, SHORT_DIRECTOR, SHORT_TITLE, SUCCESSFULLY_ADDED_MOVIE } from '../../../services/notification-messages/movieNotificationMessages';

const validateInputData = ({ title, year, director, runtime, description, imageUrl, imdb_rating }) => {
    // Invalid Type
    if (typeof title !== 'string') return INVALID_TYPE_TITLE;
    if (typeof year === 'NaN') return INVALID_TYPE_YEAR;
    if (typeof director !== 'string') return INVALID_TYPE_DIRECTOR;
    if (runtime.toString().split('.').length <= 1) return INVALID_TYPE_RUNTIME;
    if (typeof description !== 'string') return INVALID_TYPE_DESCRIPTION;
    if (typeof imageUrl !== 'string') return INVALID_TYPE_IMAGE_URL;
    if (imdb_rating.toString().split('.').length <= 1) return INVALID_TYPE_IMDB_RATING;

    // Too Short
    if (title.length < 6) return SHORT_TITLE;
    if (director.length < 6) return SHORT_DIRECTOR;
    if (description.length < 10) return SHORT_DESCRIPTION;

    // Minimal Range
    if (year < 1888) return MINIMAL_RANGE_YEAR;
    if (runtime < 0) return MINIMAL_RANGE_RUNTIME;
    if (imdb_rating < 0) return MINIMAL_RANGE_IMDB_RATING;

    // Maximal Range
    if (year > 2021) return MAXIMAL_RANGE_YEAR;
    if (runtime > 5) return MAXIMAL_RANGE_RUNTIME;
    if (imdb_rating > 10) return MAXIMAL_RANGE_IMDB_RATING;

    // Invalid Format
    if (!/^http(s)?/.test(imageUrl)) return INVALID_FORMAT_IMAGE_URL;
};

export default validateInputData;