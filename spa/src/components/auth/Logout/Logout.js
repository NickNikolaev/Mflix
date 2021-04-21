import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { AUTH_TOKEN } from '../../../config/config';
import { LOGOUT } from '../../../actions/auth/authActionTypes';
import { showNotification } from '../../../actions/notification/notificationActionCreators';
import { SUCCESSFULLY_LOGGED_OUT } from '../../../services/notification-messages/authNotificationMessages';
import { HOME_ENDPOINT } from '../../../services/api/homeEndpoints';

const Logout = () => {
    const dispatch = useDispatch();

    // Remove Auth Token
    sessionStorage.removeItem(AUTH_TOKEN);

    // Update State (isAutheniticated: true -> false)
    const logout = () => ({ type: LOGOUT });
    dispatch(logout());

    // Display Notification
    const notification = ({ type: 'success', message: SUCCESSFULLY_LOGGED_OUT });
    dispatch(showNotification(notification));
    
    // Redirect To Home Page
    return <Redirect to={HOME_ENDPOINT} />
};

export default Logout;