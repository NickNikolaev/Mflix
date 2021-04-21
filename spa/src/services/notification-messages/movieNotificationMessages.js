import { shortLength, stringType, intType, floatType, minimalRange, maximalRange } from './helpers/errorNotificationFunctions';

// Success
export const SUCCESSFULLY_ADDED_MOVIE = 'Successfully Added Movie';
export const SUCCESSFULLY_EDITED_MOVIE = 'Successfully Edited Movie';
export const SUCCESSFULLY_DELETED_MOVIE = 'Successfully Deleted Movie';

// Error

// Invalid Type
export const INVALID_TYPE_TITLE = stringType('Title')
export const INVALID_TYPE_YEAR = intType('Year');
export const INVALID_TYPE_DIRECTOR = stringType('Director');
export const INVALID_TYPE_RUNTIME = floatType('Runtime');
export const INVALID_TYPE_DESCRIPTION = stringType('Description');
export const INVALID_TYPE_IMAGE_URL = stringType('Image Url');
export const INVALID_TYPE_IMDB_RATING = floatType('IMDB Rating');
// Too Short
export const SHORT_TITLE = shortLength('Title');
export const SHORT_DIRECTOR = shortLength('Director');
export const SHORT_DESCRIPTION = shortLength('Description', 10);
// Minimal Range
export const MINIMAL_RANGE_YEAR = minimalRange('Year', 1888);
export const MINIMAL_RANGE_RUNTIME = minimalRange('Runtime', 0);
export const MINIMAL_RANGE_IMDB_RATING = minimalRange('IMDB Rating', 0);
// Maximal Range
export const MAXIMAL_RANGE_YEAR = maximalRange('Year', 2021);
export const MAXIMAL_RANGE_RUNTIME = maximalRange('Runtime', 5);
export const MAXIMAL_RANGE_IMDB_RATING = maximalRange('IMDB Rating', 10);
// Invalid Format
export const INVALID_FORMAT_IMAGE_URL = 'Image Url Should Start With http Or https';