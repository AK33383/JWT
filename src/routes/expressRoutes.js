const express = require('express')
const { tokengenerate, result } = require('../controller/controles')
const { authenticateToken} = require('../middleware/authenticatemiddleware')

const router = express.Router()

router.post('/login',tokengenerate );
router.get('/login', authenticateToken, result);
  
  
  
  module.exports = router