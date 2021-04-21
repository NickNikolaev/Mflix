const { emptyField, shortLength, stringType, intType, floatType, minimalRange, maximalRange } = require('./helpers/errorNotificationFunctions');

const errors = {
    // Empty Field
    EMPTY_TITLE: emptyField('Title'),
    EMPTY_YEAR: emptyField('Year'),
    EMPTY_DIRECTOR: emptyField('Director'),
    EMPTY_RUNTIME: emptyField('Runtime'),
    EMPTY_DESCRIPTION: emptyField('Description'),
    EMPTY_IMAGE_URL: emptyField('Image Url'),
    EMPTY_IMDB_RATING: emptyField('IMDB Rating'),
    // Invalid Type
    INVALID_TYPE_TITLE: stringType('Title'),
    INVALID_TYPE_YEAR: intType('Year'),
    INVALID_TYPE_DIRECTOR: stringType('Director'),
    INVALID_TYPE_RUNTIME: floatType('Runtime'),
    INVALID_TYPE_DESCRIPTION: stringType('Description'),
    INVALID_TYPE_IMAGE_URL: stringType('Image Url'),
    INVALID_TYPE_IMDB_RATING: floatType('IMDB Rating'),
    // Too Short
    SHORT_TITLE: shortLength('Title'),
    SHORT_DIRECTOR: shortLength('Director'),
    SHORT_DESCRIPTION: shortLength('Description', 10),
    // Minimal Range
    MINIMAL_RANGE_YEAR: minimalRange('Year', 1888),
    MINIMAL_RANGE_RUNTIME: minimalRange('Runtime', 0),
    MINIMAL_RANGE_IMDB_RATING: minimalRange('IMDB Rating', 0),
    // Maximal Range
    MAXIMAL_RANGE_YEAR: maximalRange('Year', 2021),
    MAXIMAL_RANGE_RUNTIME: maximalRange('Runtime', 5),
    MAXIMAL_RANGE_IMDB_RATING: maximalRange('IMDB Rating', 10),
    // Invalid Format
    INVALID_FORMAT_IMAGE_URL: 'Image Url Should Start With http Or https'
};

module.exports = {
    ...errors
};