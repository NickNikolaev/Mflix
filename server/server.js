const express = require('express');
const { PORT } = require('./config/config');
const { connectToDB } = require('./config/mongodb');
const cors = require('cors');
const routes = require('./routes');

const app = express();

// Config
require('./config/express')(app);
connectToDB();

// Cors Policy
app.use(cors());

// Routes
app.use(routes);

app.listen(PORT, () => console.log(`listening on port ${PORT}`));