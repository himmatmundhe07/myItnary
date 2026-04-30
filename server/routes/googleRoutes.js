import express from 'express';

const router = express.Router();

// The user provided API Key
const GOOGLE_API_KEY = "AIzaSyBGb-_iwZdJ7uohjACwD7bI7l6bZGLCy48";

// Fetch Hospitals in Udaipur
router.get('/hospitals', async (req, res) => {
  try {
    const url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=hospitals+in+Udaipur+Rajasthan&key=${GOOGLE_API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    if (!response.ok) {
        return res.status(500).json({ message: "Failed to fetch from Google", error: data });
    }
    res.json(data.results.slice(0, 3)); // Return top 3 real hospitals
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
