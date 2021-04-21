import { SUCCESSFULLY_EDITED_MOVIE } from '../../../../services/notification-messages/movieNotificationMessages';
import { showNotification } from '../../../notification/notificationActionCreators';
import { GET_MOVIE_BY_ID_ENDPOINT } from '../../../../services/api/movieEndpoints';
import { editOneMovieSuccess } from '../../movieActionCreators';

export const handleSuccess = (dispatch, history, movieId) => {
    // Dispatch Edit One Movie Success Action
    dispatch(editOneMovieSuccess());
    // Show Notification 
    const notification = { type: 'success', message: SUCCESSFULLY_EDITED_MOVIE };
    dispatch(showNotification(notification));
    // Redirect To Movie Details Page
    history.push(GET_MOVIE_BY_ID_ENDPOINT(movieId));
};