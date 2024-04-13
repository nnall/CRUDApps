const mysql = require("mysql2");

// Connecting to MySQL server
const connection = mysql.createConnection({
  host: "127.0.0.1",
  // user: "root",
  // password: "Issabella1990!",
  user: "root",
  password: "",
  // database: "customers",
  // port: 3306,
});

// Connect to MySQL database
connection.connect((error) => {
  if (error) {
    console.error("Error connecting to the database:", error);
    return;
  }
  console.log("Connected to the database as ID:", connection.threadId);
});

// Export the database connection
module.exports = connection;
