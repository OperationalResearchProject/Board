var mongoose = require('mongoose');
const Fitness = require('./Fitness').Fitness;

var transaction = new mongoose.Schema({
    transactionId: {type: String},
    customer: {type: String},
    solutionInitial: {type: String},
    solution_size: {type: Number},
    best_fitness_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Fitnesses' },
    algorithm: {type: String},
    type: {type: String}
});

mongoose.model("Transaction", transaction);
module.exports.Transaction = mongoose.model('Transaction');
