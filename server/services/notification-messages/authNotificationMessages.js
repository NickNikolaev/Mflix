const { emptyField, shortLength } = require('./helpers/errorNotificationFunctions');

const errors = {
    EMPTY_USERNAME: emptyField('Username'),
    EMPTY_EMAIL: emptyField('Email'),
    EMPTY_PASSWORD: emptyField('Password'),

    SHORT_USERNAME: shortLength('Username'),
    SHORT_EMAIL: shortLength('Email'),
    SHORT_PASSWORD: shortLength('Password'),

    ALREADY_EXISTING_USER: 'Already Existing User',
    INVALID_USER: 'Invalid Email or Password'
};

module.exports = {
    ...errors,
};