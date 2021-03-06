const Transaction = require('../models/Transaction').Transaction;
const Fitnesses = require('../models/Fitness').Fitnesses;



module.exports.getTransactions = function () {
    return Transaction.find({}).populate("best_fitness_id", "fitness").exec();
};

module.exports.getFitnesses = function (transactionId) {
    return Fitnesses.find({"transaction_id": transactionId}, "fitness");
};

module.exports.getSolution = function (fitnessId) {
    return Fitnesses.find({"_id": fitnessId}, "transaction_id solution");
};

module.exports.deleteTransaction = function (transactionId) {
    return Transaction.deleteMany({"_id": transactionId}).then(function () {
        return Fitnesses.deleteMany({"transaction_id": transactionId});
    });
};
