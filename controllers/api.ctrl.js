var mongoose = require('mongoose');
const Transaction = require('../models/Transaction').Transaction;
const Fitnesses = require('../models/Fitness').Fitnesses;


module.exports.getUserNumber = function () {

    return 2;
};

module.exports.getTransactions = function () {
    return Transaction.find({}).populate("best_fitness_id", "fitness").exec();
};

module.exports.getFitnesses = function (transactionId) {
   return Fitnesses.find({"transaction_id":transactionId}, "fitness");
};