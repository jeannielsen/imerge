const express = require("express");
const bodyParser = require('body-parser');
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/public/index.html"));
});

if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, 'client/build')));
  // Handle React routing, return all requests to React app
    // app.get('*', function(req, res) {
    //   res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    // });
  }
app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
