import { HOME_ENDPOINT } from '../../../../services/api/homeEndpoints';
import { showNotification } from '../../../notification/notificationActionCreators';
import { SUCCESSFULLY_ADDED_MOVIE } from '../../../../services/notification-messages/movieNotificationMessages';

export const handleSuccess = (dispatch, history) => {
    // Show Notification and Redirect To Home Page
    const notification = { type: 'success', message: SUCCESSFULLY_ADDED_MOVIE };
    dispatch(showNotification(notification));
    history.push(HOME_ENDPOINT);
};