// server.js
const jsonServer = require('json-server');
const cors = require('cors');
const server = jsonServer.create();
const router = jsonServer.router('db.json');  // Path to your JSON file
const middlewares = jsonServer.defaults();

// Apply CORS middleware
server.use(cors());  // Enable CORS for all routes
server.use(middlewares);

// Set up json-server to watch for changes in db.json
server.use(router);
server.listen(3000, () => {
  console.log('JSON Server is running on http://localhost:3000');
});
