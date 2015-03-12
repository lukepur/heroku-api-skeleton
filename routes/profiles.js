var router = require('express').Router();

router.get('/', function(req, res, next) {
	res.send('/profiles');
});

module.exports = router;
