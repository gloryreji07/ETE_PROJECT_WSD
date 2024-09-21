const express = require('express');
const bodyParser = require('body-parser');
const { ServerConfig, DatabaseConfig } = require('./config');
const apiRoutes = require('./routes');
const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json()); // Note: body-parser is now part of express

// Mount API routes under /api
app.use('/api', apiRoutes);

// Serve static files from the root directory
app.use(express.static(path.join(__dirname, '..', '..')));

// Serve index.html at the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', 'index.html'));
});

// Connect to the database
DatabaseConfig.dbConnect();

// Start the server
app.listen(ServerConfig.PORT, () => {
    console.log(`Successfully started the server on PORT : ${ServerConfig.PORT}`);
});
