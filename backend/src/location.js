const express = require('express');
const request = require('request');
const router = express.Router(); // Create a new router object

// Define the /findShops route
router.get('/findShops', (req, res) => {
    const { latitude, longitude, radius } = req.query;
    const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=${radius}&type=store&key=${process.env.GOOGLE_MAPS_API_KEY}`;
    request({ url, json: true }, (error, response, body) => {
        if (error) {
            return res.status(500).send({ error: 'Unable to connect to Google Places API' });
        }

        // Check if the API call was successful and results were found
        if (body.status === 'OK' && body.results) {
            // Extract the names of the places from the results array
            const names = body.results.map(place => place.name);

            // Send the list of names as the response
            res.send(names);
        } else {
            // Handle cases where the API did not return a successful status
            res.status(500).send({ error: body.error_message || 'No results found' });
        }
    });
});

router.post('/updateRadius', (req, res) => {
    const { radius } = req.body;
    // Store the radius in your database or server memory as needed
    console.log(`Radius updated to: ${radius}`); // Just logging, implement database schema later
    res.json({ radius });
});


module.exports = router; // Export the router
