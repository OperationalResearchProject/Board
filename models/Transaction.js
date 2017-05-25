var mongoose = require('mongoose');

var transaction = new mongoose.Schema({
    transactionId: {type: String},
    customer: {type: String},
    solutionInitial: {type: String},
    solution_size: {type: Integer},
    bestFitnessId: {type: ObjectId},
    algorithm: {type: String},
    type: {type: String}
});

mongoose.model("Transaction", transaction);
module.exports.Transaction = mongoose.model('Transaction');
