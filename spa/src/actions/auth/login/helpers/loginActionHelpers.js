import jwt from 'jsonwebtoken';
import { AUTH_TOKEN, SECRET_KEY } from '../../../../config/config';
import { HOME_ENDPOINT } from '../../../../services/api/homeEndpoints';
import { SUCCESSFULLY_LOGGED_IN, INVALID_TYPE_EMAIL, INVALID_TYPE_PASSWORD, SHORT_EMAIL, SHORT_PASSWORD } from '../../../../services/notification-messages/authNotificationMessages';
import { showNotification } from '../../../notification/notificationActionCreators';
import { loginSuccess, loginError } from '../../authActionCreators';

export const validateInputData = ({ email, password }) => {
    // Invalid Type
    if (typeof email !== 'string') return INVALID_TYPE_EMAIL;
    if (typeof password !== 'string') return INVALID_TYPE_PASSWORD;

    // Too Short
    if (email.length < 6) return SHORT_EMAIL;
    if (password.length < 6) return SHORT_PASSWORD;
};

export const handleSuccess = (dispatch, responseData, history) => {
    // Generate JWT
    let user = responseData;
    jwt.sign(user, SECRET_KEY, (error, token) => {
        // Add jwt to session storage
        sessionStorage.setItem(AUTH_TOKEN, token);
        // Change Navigation View
        dispatch(loginSuccess(user));
        // Show Notification
        const notification = { type: 'success', message: SUCCESSFULLY_LOGGED_IN };
        dispatch(showNotification(notification));
        // Redirect to Home Page
        history.push(HOME_ENDPOINT);
    });
};

export const handleError = (dispatch, error) => {
    // Update User State
    dispatch(loginError());
    // Show Notification
    const notification = { type: 'error', message: error };
    dispatch(showNotification(notification));
};

