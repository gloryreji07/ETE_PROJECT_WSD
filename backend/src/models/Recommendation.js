const mongoose = require('mongoose');

const recommendationSchema = new mongoose.Schema({
    destination: {
        type: String,
        required: true
    },
    budget: {
        type: Number,
        required: true
    },
    accommodation: {
        type: String,
        enum: ['Hotel', 'Hostel', 'Airbnb', 'Dormitories', 'House'],
        required: true
    },
    placesToVisit: {
        type: [String],
        required: true
    },
    localFood: {
        type: [String],
        required: true
    },
    localDeals: {
        type: [String],
        required: true
    },
    activities: {
        type: [String],
        required: true
    }
},{ collection: 'recommendation' });

module.exports = mongoose.model("Recommendation", recommendationSchema);
