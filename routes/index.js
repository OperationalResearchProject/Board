var express = require('express');
var router = express.Router();
var apiCtrl = require('../controllers/api.ctrl');

/* GET home page. */
router.get('/', function(req, res, next) {
    apiCtrl.getTransactions().then(function (tr) {
        res.render('index', { transactionNumber: tr.length, transactions: tr });
    });
});

router.get('/fitnesses/:id', function(req, res) {

    apiCtrl.getFitnesses(req.params.id).then(function (f) {
        res.json(f);
    });


});
module.exports = router;
