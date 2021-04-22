import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { useEffect } from 'react';

import { deleteOneMovie } from '../../../actions/movie/delete/deleteMovieActions';
import { deleteOneMovieSuccess } from '../../../actions/movie/movieActionCreators';
import { showNotification } from '../../../actions/notification/notificationActionCreators';
import { SUCCESSFULLY_DELETED_MOVIE } from '../../../services/notification-messages/movieNotificationMessages';
import { HOME_ENDPOINT } from '../../../services/api/homeEndpoints';
import { selectUser } from '../../../app/selectors';

const DeleteMovie = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const { movieId } = useParams();
    const { _id } = useSelector(selectUser);

    useEffect(() => {
        // Delete One Movie
        deleteOneMovie(movieId, _id)
            .then(() => {
                // Dispatch Delete Movie Success Action
                dispatch(deleteOneMovieSuccess());

                // Show Notification
                const notification = { type: 'success', message: SUCCESSFULLY_DELETED_MOVIE };
                dispatch(showNotification(notification));

                // Redirect To Home Page
                history.push(HOME_ENDPOINT);
            });
    }, []);

    return null;
};

export default DeleteMovie;