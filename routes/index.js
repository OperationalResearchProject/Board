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

router.get('/solution/:id/transac/:transac', function(req, res) {
    apiCtrl.getSolution(req.params.id).then(function (result) {
        res.header('Content-type', "application/octet-stream");
        res.header('Content-disposition', 'attachment; filename=best_solution_'+req.params.transac+'.txt');
        res.send(result[0].solution);
    });
});

router.get('/transactions/delete/:id', function(req, res, next) {
    apiCtrl.deleteTransaction(req.params.id).then(function () {
        res.redirect('/');
    });
});

module.exports = router;
