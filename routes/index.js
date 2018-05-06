var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json([
    {id : 1, username: "sombody" },
    {id : 3, username: "sombody" }
  ]);
});

router.get('/users', (req, res, next)=>{
  res.json([
    {id : 1, username: "somebody" },
    {id : 3, username: "somebody" }
  ]);
});

module.exports = router;
