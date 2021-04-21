const { EMPTY_EMAIL, EMPTY_PASSWORD, SHORT_EMAIL, SHORT_PASSWORD } = require('../../notification-messages/authNotificationMessages');
const validator = require('validator');

const validateInputData = ({ email, password }) => {
    if (validator.isEmpty(email)) return EMPTY_EMAIL;
    if (validator.isEmpty(password)) return EMPTY_PASSWORD;

    if(!validator.isLength(email, 6)) return SHORT_EMAIL;
    if(!validator.isLength(password, 6)) return SHORT_PASSWORD;
};

module.exports = validateInputData;