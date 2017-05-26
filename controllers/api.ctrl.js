var mongoose = require('mongoose');
const Transaction = require('../models/Transaction').Transaction;

module.exports.getTransactionNumber = function () {

    return 42;
};

module.exports.getUserNumber = function () {

    return 2;
};

module.exports.getTransactions = function () {
    return Transaction.find({}).populate("best_fitness_id", "fitness").exec();
};

