const users = require('../config/modeldb')
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv')
dotenv.config()

const secretKey = process.env.SECRETKEY

 const tokengenerate = (req, res) => {
    const { username, password } = req.body;
  
    
    const user = users.find(user => user.username === username && user.password === password);
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
  
    
    const token = jwt.sign({ userName: user.username }, secretKey);
    
    res.json({ token });
  }

  const result = (req, res) => {
    res.json({ username:req.userName});
  }

  module.exports= {
    tokengenerate,
    result
  }