// cors.js
const cors = require('cors');
module.exports = (req, res, next) => {
  cors()(req, res, next);  // Use the cors middleware
};
