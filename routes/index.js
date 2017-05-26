var express = require('express');
var router = express.Router();
var apiCtrl = require('../controllers/api.ctrl');

/* GET home page. */
router.get('/', function(req, res, next) {
    apiCtrl.getTransactions().then(function (tr) {
        res.render('index', { transactionNumber: apiCtrl.getTransactionNumber(), userNumber: apiCtrl.getUserNumber(), transactions: tr });
    });
});

module.exports = router;
