import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { hideNotification } from '../../../actions/notification/notificationActionCreators';
import './Notification.css';

const notificationClassNames = {
    success: 'notification-success',
    error: 'notification-error'
};

const Notification = ({ type, message }) => {
    const dispatch = useDispatch();

    const getNotificationElement = () => {
        const selector = `.${notificationClassNames[type]}`;
        return document.querySelector(selector);
    };

    const show = () => {
        const notificationElement = getNotificationElement();

        // Add show class and when the animation starts, make visible the notification 
        notificationElement.classList.add('show');
        notificationElement.addEventListener('animationstart', () => notificationElement.style.visibility = 'visible');

        // Hide Notification After 2 Seconds
        setTimeout(() => hide(), 2000);
    };

    const hide = () => {
        const notificationElement = getNotificationElement();

        // Remove show class and add hide class
        notificationElement.classList.remove('show');
        notificationElement.classList.add('hide');

        // Dispatch hide notification action after the animation ends
        notificationElement.addEventListener('animationend', () => dispatch(hideNotification()));
    };

    useEffect(show, []);

    return (
        <div className={notificationClassNames[type]}>
            <span>{message}</span>
        </div>
    );
};

export default Notification;