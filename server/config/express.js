const express = require('express');

const setupExpress = app => {
    // Body Parser
    app.use(express.json())
    app.use(express.urlencoded({ extended: true }));
};

module.exports = setupExpress;