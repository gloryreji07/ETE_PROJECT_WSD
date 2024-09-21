// backend/src/middlewares/RecommendationMiddleware.js

const validateRequest = (req, res, next) => {
    const { destination, budget, accommodation } = req.body;
  
    if (!destination || !budget || !accommodation) {
      return res.status(400).json({ message: 'All fields are required.' });
    }
  
    next();
  };
  
  module.exports = {
    validateRequest,
  };
  