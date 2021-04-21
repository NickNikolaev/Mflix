import { SHOW_NOTIFICATION, HIDE_NOTIFICATION } from './notificationActionTypes';

export const showNotification = notification => ({ type: SHOW_NOTIFICATION, payload: notification });

export const hideNotification = () => ({ type: HIDE_NOTIFICATION });