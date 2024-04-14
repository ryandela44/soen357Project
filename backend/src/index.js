require('dotenv').config();
const express = require('express');
const cors = require('cors');
const locationRoutes = require('./location'); // Import the location routes
const loginRouter = require('./login'); // Adjust path as necessary
const signUpRouter = require('./signup');
const connectToDatabase = require('../../database/src/config');
//const populateDB = require('./populateDB')
const app = express();
const PORT = 3000;
const ADDRESS = '127.0.0.1'

connectToDatabase();
//populateDB()

app.use(express.json());
app.use(cors());

// Use the routes defined in location.js
app.use(locationRoutes);
app.use('/api',signUpRouter)
app.use('/api', loginRouter)

app.listen(PORT, () => {
    console.log(`Server is running at ${ADDRESS} on port ${PORT}`);
});