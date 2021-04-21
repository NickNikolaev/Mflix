import { useDispatch } from 'react-redux';
import { Redirect, useParams } from 'react-router';
import { useEffect } from 'react';

import { deleteOneMovie } from '../../../actions/movie/delete/deleteMovieActions';
import { deleteOneMovieSuccess } from '../../../actions/movie/movieActionCreators';
import { showNotification } from '../../../actions/notification/notificationActionCreators';
import { SUCCESSFULLY_DELETED_MOVIE } from '../../../services/notification-messages/movieNotificationMessages';
import { HOME_ENDPOINT } from '../../../services/api/homeEndpoints';

const DeleteMovie = () => {
    const { movieId } = useParams();
    const dispatch = useDispatch();

    useEffect(async () => {
        // Delete One Movie
        await deleteOneMovie(movieId);

        // Dispatch Delete Movie Success Action
        dispatch(deleteOneMovieSuccess());

        // Show Notification
        const notification = { type: 'success', message: SUCCESSFULLY_DELETED_MOVIE };
        dispatch(showNotification(notification));
    }, []);

    return <Redirect to={HOME_ENDPOINT} />
};

export default DeleteMovie;