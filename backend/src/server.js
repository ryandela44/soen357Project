require('dotenv').config();
const express = require('express');
const locationRoutes = require('./location'); // Import the location routes

const app = express();
const PORT = 3000;
const ADDRESS = '127.0.0.1'

app.use(express.json());

// Use the routes defined in location.js
app.use(locationRoutes);

app.listen(PORT, () => {
    console.log(`Server is running at ${ADDRESS} on port ${PORT}`);
});