// backend/src/routes/v1/recommendationRoutes.js

const express = require('express');
const { getRecommendations } = require('../../controllers/recommendationController'); // Adjust the path if necessary
const { validateRequest } = require('../../middlewares/RecommendationMiddleware'); // Adjust the path if necessary

const router = express.Router();

router.post('/plan', validateRequest, getRecommendations);

module.exports = router;
