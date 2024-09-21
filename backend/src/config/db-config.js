const mongoose = require('mongoose');
require('dotenv').config();

const dbConnect = () => {
    const DATABASE_URL = process.env.DATABASE_URL;

    if (!DATABASE_URL) {
        console.error("DATABASE_URL is not defined");
        process.exit(1);
    }

    mongoose.connect(DATABASE_URL)
    .then(() => console.log("Connection success"))
    .catch((error) => {
        console.log("Issue in DB connection");
        console.log(error.message);
        process.exit(1);
    });
};

module.exports = { dbConnect };
// Database configuration
//To change things in server