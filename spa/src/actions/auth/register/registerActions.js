import axios from 'axios';
import { BASE_URL } from '../../../config/config';
import { REGISTER_ENDPOINT } from '../../../services/api/authEndpoints';
import { validateInputData, handleSuccess, handleError } from './helpers/registerActionHelpers';

export const registerUser = (user, history) => dispatch => {
    // Validate Input Data
    let error = validateInputData(user);
    if (error) return handleError(dispatch, error);

    // Submit Data
    axios.post(BASE_URL + REGISTER_ENDPOINT, user)
        .then(({ data }) => {
            const { success, error, responseData } = data;

            return success
                ? handleSuccess(dispatch, responseData, history)
                : handleError(dispatch, error)
        });
};