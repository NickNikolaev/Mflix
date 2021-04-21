import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './Navigation.css';
import SearchBar from './Search-Bar/SearchBar';
import Notification from '../Notification/Notification';
import { HOME_ENDPOINT } from '../../../services/api/homeEndpoints';
import GuestView from './GuestView/GuestView';
import AuthView from './AuthView/AuthView';

const Navigation = () => {
    const selectNotification = state => state.notification;
    const { type, message } = useSelector(selectNotification);

    const selectUser = state => state.user;
    const { isAuthenticated, username } = useSelector(selectUser);

    return (
        <div className="navigation">
            <SearchBar />

            <Link className="navigation-title" to={HOME_ENDPOINT}>mflix</Link>

            <div className="navigation-user">
                {isAuthenticated
                    ? <AuthView username={username} />
                    : <GuestView />
                }
            </div>

            {message
                ? <Notification message={message} type={type} />
                : null
            }
        </div>
    );
};

export default Navigation;