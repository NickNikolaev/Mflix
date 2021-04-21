import { registerSuccess, registerError } from '../../authActionCreators';
import { LOGIN_ENDPOINT } from '../../../../services/api/authEndpoints';
import { showNotification } from '../../../notification/notificationActionCreators';
import { SUCCESSFULLY_REGISTERED } from '../../../../services/notification-messages/authNotificationMessages';
import { INVALID_TYPE_USERNAME, INVALID_TYPE_EMAIL, INVALID_TYPE_PASSWORD, SHORT_USERNAME, SHORT_EMAIL, SHORT_PASSWORD } from '../../../../services/notification-messages/authNotificationMessages';

export const validateInputData = ({ username, email, password }) => {
    // Invalid Types
    if (typeof username !== 'string') return INVALID_TYPE_USERNAME;
    if (typeof email !== 'string') return INVALID_TYPE_EMAIL;
    if (typeof password !== 'string') return INVALID_TYPE_PASSWORD;

    // Too Short
    if (username.length < 6) return SHORT_USERNAME;
    if (email.length < 6) return SHORT_EMAIL;
    if (password.length < 6) return SHORT_PASSWORD;
};

export const handleError = (dispatch, error) => {
    // Show Error Notification
    dispatch(registerError());

    const notification = { type: 'error', message: error };
    dispatch(showNotification(notification));
};

export const handleSuccess = (dispatch, responseData, history) => {
    // Redirect to Login Page and Show Success Notification
    dispatch(registerSuccess(responseData));

    const notification = { type: 'success', message: SUCCESSFULLY_REGISTERED };
    dispatch(showNotification(notification));

    history.push(LOGIN_ENDPOINT);
};