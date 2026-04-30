import express from 'express';
import { generateItinerary } from '../services/gemini.service.js';

const router = express.Router();

router.post('/generate', async (req, res) => {
  try {
    const tripData = req.body;
    
    // Basic validation
    if (!tripData.location || !tripData.duration) {
      return res.status(400).json({ message: "Location and duration are required." });
    }

    const itinerary = await generateItinerary(tripData);
    res.json(itinerary);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
