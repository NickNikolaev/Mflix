const { EMPTY_USERNAME, EMPTY_EMAIL, EMPTY_PASSWORD, SHORT_USERNAME, SHORT_EMAIL, SHORT_PASSWORD } = require('../../notification-messages/authNotificationMessages');

const validateInputData = ({ username, email, password }) => {
    if (!username) return EMPTY_USERNAME;
    if (!email) return EMPTY_EMAIL;
    if (!password) return EMPTY_PASSWORD;

    if (username.length < 6) return SHORT_USERNAME;
    if (email.length < 6) return SHORT_EMAIL;
    if (password.length < 6) return SHORT_PASSWORD;
};

module.exports = validateInputData;