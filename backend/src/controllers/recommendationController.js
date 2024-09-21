// backend/src/controllers/RecommendationController.js

const Recommendation = require('../models/Recommendation');

const getRecommendations = async (req, res) => {
  try {
    const { destination, budget, accommodation } = req.body;
    console.log("the function is ruuning",req.body);
    console.log("Querying with: ", { destination, budget, accommodation });
    // Query the database for matching recommendations
    const recommendations = await Recommendation.find({
      destination,
      budget,
      accommodation,
    });

    if (!recommendations || recommendations.length === 0) {
      return res.status(404).json({ message: 'No recommendations found.' });
    }

    console.log('Recommendations:', recommendations);
    return res.status(200).json({ data: recommendations });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

module.exports = {
  getRecommendations,
};
