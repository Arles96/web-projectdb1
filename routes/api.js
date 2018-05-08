var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/users', (req, res, next)=>{
  res.json([
    {id : 1, username: "somebody" },
    {id : 3, username: "somebody" }
  ]);
});

module.exports = router;
