import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './Notification.css';
import { hideNotification } from '../../../actions/notification/notificationActionCreators';

const notificationClassNames = {
    success: 'notification-success',
    error: 'notification-error'
};

const Notification = ({ type, message }) => {
    const dispatch = useDispatch();

    const show = () => {
        const selector = `.${notificationClassNames[type]}`;
        const notificationElement = document.querySelector(selector);

        notificationElement.classList.add('show');
        notificationElement.addEventListener('animationstart', () => notificationElement.style.visibility = 'visible');
    };

    const hide = () => {
        const selector = `.${notificationClassNames[type]}`;
        const notificationElement = document.querySelector(selector);
        
        notificationElement.classList.remove('show');
        notificationElement.classList.add('hide');
        notificationElement.addEventListener('animationend', () => dispatch(hideNotification()));
    };

    useEffect(show, []);

    return (
        <div className={notificationClassNames[type]} onClick={hide} >
            <span>{message}</span>
        </div>
    );
};

export default Notification;