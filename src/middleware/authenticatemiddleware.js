const jwt = require('jsonwebtoken');
const dotenv = require('dotenv')
dotenv.config()



const secretKey = process.env.SECRETKEY



function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
  
    if (!token) {
      return res.status(401).json({ error: 'No token provided' });
    }
  
    jwt.verify(token, secretKey, (err, decoded) => {
      if (err) {
        return res.status(403).json({ error: 'Invalid token' });
      }
  
      req.userName = decoded.userName;
     
      next();
    });
  }

  module.exports = {
    authenticateToken
  }