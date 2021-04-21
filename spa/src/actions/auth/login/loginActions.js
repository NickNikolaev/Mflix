import axios from 'axios';
import { BASE_URL } from '../../../config/config';
import { LOGIN_ENDPOINT } from '../../../services/api/authEndpoints';
import { handleError, handleSuccess, validateInputData } from './helpers/loginActionHelpers';

export const loginUser = (user, history) => dispatch => {
    // Validate Input Data
    let error = validateInputData(user);
    if (error) return handleError(dispatch, error);

    // Submit Data
    axios.post(BASE_URL + LOGIN_ENDPOINT, user)
        .then(({ data }) => {
            const { success, responseData, error } = data;

            success
                ? handleSuccess(dispatch, responseData, history)
                : handleError(dispatch, error);
        });
};