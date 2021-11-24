var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/cpfm', function(req, res, next) {
  res.status(200).json(
    { 
      "success": true,
      "app-version": "3.1.0", 
      "is_show_third_party_login": true
    }
  );
});

module.exports = router;
