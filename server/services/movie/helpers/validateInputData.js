const { EMPTY_TITLE, EMPTY_YEAR, EMPTY_DIRECTOR, EMPTY_RUNTIME, EMPTY_DESCRIPTION, EMPTY_IMAGE_URL, EMPTY_IMDB_RATING, MAXIMAL_RANGE_IMDB_RATING, MINIMAL_RANGE_IMDB_RATING, INVALID_TYPE_IMDB_RATING, INVALID_TYPE_TITLE, INVALID_TYPE_YEAR, INVALID_TYPE_DIRECTOR, SHORT_TITLE, SHORT_DIRECTOR, MINIMAL_RANGE_YEAR, MAXIMAL_RANGE_YEAR, MAXIMAL_RANGE_RUNTIME, INVALID_TYPE_IMAGE_URL, INVALID_TYPE_RUNTIME, MINIMAL_RANGE_RUNTIME, SHORT_DESCRIPTION, INVALID_TYPE_DESCRIPTION, INVALID_FORMAT_IMAGE_URL } = require('../../notification-messages/movieNotificationMessages');

const validateInputData = ({ title, year, director, runtime, description, imageUrl, imdb_rating }) => {
    // Empty Field
    if (title.length == 0) return EMPTY_TITLE;
    if (year.length == 0) return EMPTY_YEAR;
    if (director.length == 0) return EMPTY_DIRECTOR;
    if (runtime.length == 0) return EMPTY_RUNTIME;
    if (description.length == 0) return EMPTY_DESCRIPTION;
    if (imageUrl.length == 0) return EMPTY_IMAGE_URL;
    if (imdb_rating.length == 0) return EMPTY_IMDB_RATING;

    // Invalid Type
    if (typeof title !== 'string') return INVALID_TYPE_TITLE;
    if (typeof year !== 'number') return INVALID_TYPE_YEAR;
    if (typeof director !== 'string') return INVALID_TYPE_DIRECTOR;
    if (typeof runtime !== 'number' || runtime.toString().split('.').length <= 1) return INVALID_TYPE_RUNTIME;
    if (typeof description !== 'string') return INVALID_TYPE_DESCRIPTION;
    if (typeof imageUrl !== 'string') return INVALID_TYPE_IMAGE_URL;
    if (typeof imdb_rating !== 'number' || imdb_rating.toString().split('.').length <= 1) return INVALID_TYPE_IMDB_RATING;

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

module.exports = validateInputData;