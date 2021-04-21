const bcrypt = require('bcrypt');
const validateInputData = require('./validateInputData');
const { getDB, COLL_USERS } = require('../../../config/mongodb');
const { ALREADY_EXISTING_USER } = require('../../notification-messages/authNotificationMessages');
const { SALT_ROUNDS } = require('../../../config/config');

const registerUser = async (form) => {
    const { email, password } = form;
    const users = getDB().collection(COLL_USERS);

    try {
        // Validate Input Data
        let error = validateInputData(form);
        if (error) throw error;
        // Check For Already Existing User
        const user = await users.findOne({ email });
        if (user) throw ALREADY_EXISTING_USER;
        // Save User with Hash Password
        const hashPassword = await bcrypt.hash(password, SALT_ROUNDS);
        return users.insertOne({ ...form, password: hashPassword });
        
    } catch (error) { throw error };
};

module.exports = registerUser;