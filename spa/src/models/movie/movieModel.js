import { titleInputFieldData, yearInputFieldData, directorInputFieldData, runtimeInputFieldData, descriptionInputFieldData, imageUrlInputFieldData, imdbRatingInputFieldData } from './inputFieldsData';
import FormInputField from '../../components/auth/common/FormInputField';

export const inputFieldsData = {
    title: titleInputFieldData,
    year: yearInputFieldData,
    director: directorInputFieldData,
    runtime: runtimeInputFieldData,
    description: descriptionInputFieldData,
    imageUrl: imageUrlInputFieldData,
    imdb_rating: imdbRatingInputFieldData,
};

export const defaultState = {
    title: '',
    year: '',
    director: '',
    runtime: '',
    description: '',
    imageUrl: '',
    imdb_rating: '',
};

export default {
    defaultState,
    inputFieldsData,
    InputField: FormInputField
};