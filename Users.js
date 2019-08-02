const express = require('express');
const router = express.Router();

router.get('/login', (req, res, next) => {
  
  res.json({
    status:"0",
    response:'hello sudhir1534e4i'

    })
   
});
    
module.exports = router;