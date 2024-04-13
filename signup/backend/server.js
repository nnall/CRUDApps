// backend/server.js
const express = require("express");
const apiRoutes = require("./routes/api"); // Import API routes
// Import database connection from db.js
// const dbConnection = require("./db");

// Initialize Express application
const app = express();

// Define PORT
const PORT = process.env.PORT || 5001;
// const PORT = process.env.PORT || 3306;

// Middleware
app.use(express.json()); // Parse JSON requests

// API Routes
app.use("/api", apiRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
