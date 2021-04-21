import { showNotification } from '../../notification/notificationActionCreators';
import { editOneMovieError } from '../movieActionCreators';

const handleError = (dispatch, error) => {
    // Dispatch Edit Movie Action Error
    dispatch(editOneMovieError());
    // Show Notification
    const notification = ({ type: 'error', message: error });
    dispatch(showNotification(notification));
};

export default handleError;