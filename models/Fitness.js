var mongoose = require('mongoose');

var fitnesses = new mongoose.Schema({
    transactionId: {type: String},
    solution: {type: String},
    fitness: {type: Number}
});

mongoose.model("Fitnesses", fitnesses);
module.exports.Fitness = mongoose.model('Fitnesses');
