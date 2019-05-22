var express = require('express');
var router = express.Router();

const physician_controller = require('../controllers/physician.controller');

router.get('/api/getphysicians',physician_controller.get_all);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../../client/build/index.html'));
});

module.exports = router;
