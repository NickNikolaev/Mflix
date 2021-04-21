const bcrypt = require('bcrypt');
const { getDB, COLL_USERS } = require('../../../config/mongodb');
const { INVALID_USER } = require('../../notification-messages/authNotificationMessages');
const validateInputData = require('./validateInputData');

const loginUser = async form => {
    try {
        // Validate Input Data
        let error = validateInputData(form);
        if (error) throw error;
        // Check For Invalid User
        const users = getDB().collection(COLL_USERS);
        const user = await users.findOne({ email: form.email });
        if (!user) throw INVALID_USER;

        // Check For Invalid Password
        const validPassword = await bcrypt.compare(form.password, user.password);
        if (!validPassword) throw INVALID_USER;

        // Successfully Logged In
        const { _id, username, email } = user;
        return { _id, username, email };

    } catch (error) { throw error; }
};

module.exports = loginUser;