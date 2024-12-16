require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();

// Serve static files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname)));

// Serve the HTML file for the root path
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'location_information_picker.html'));
});

// Endpoint to provide the API key
app.get('/api-key', (req, res) => {
    res.json({ apiKey: process.env.GOOGLE_API_MAPS_KEY });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
