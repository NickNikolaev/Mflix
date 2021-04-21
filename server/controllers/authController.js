const { Router } = require('express');
const router = Router();

const registerUser = require('../services/auth/register/registerUser');
const loginUser = require('../services/auth/login/loginUser');

router.post('/register', (req, res) => {
    registerUser(req.body)
        .then(({ ops }) => {
            const { _id, username, email } = ops[0];
            const response = { success: true, responseData: { _id, username, email } };
            res.json(response);
        })
        .catch(error => res.json({ error }));
});

router.post('/login', (req, res) => {
    loginUser(req.body)
        .then(responseData => res.json({ success: true, responseData }))
        .catch(error => res.json({ error }));
});

module.exports = router;