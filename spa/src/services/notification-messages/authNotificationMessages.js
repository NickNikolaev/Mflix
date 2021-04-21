import { shortLength, stringType } from './helpers/errorNotificationFunctions';

// Success
export const SUCCESSFULLY_REGISTERED = 'Successfully Registered';
export const SUCCESSFULLY_LOGGED_IN = 'Successfully Logged In';
export const SUCCESSFULLY_LOGGED_OUT = 'Successfully Logged Out';

// Error

// Invalid Type
export const INVALID_TYPE_USERNAME = stringType('Username');
export const INVALID_TYPE_EMAIL = stringType('Email');
export const INVALID_TYPE_PASSWORD = stringType('Password');

// Too Short
export const SHORT_USERNAME = shortLength('Username');
export const SHORT_EMAIL = shortLength('Email');
export const SHORT_PASSWORD = shortLength('Password');