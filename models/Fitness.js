var mongoose = require('mongoose');

var fitnesses = new mongoose.Schema({
    transactionId: {type: String},
    solution: {type: String},
    fitness: {type: Number}
});

mongoose.model("Fitnesses", fitnesses);
module.exports.Fitnesses = mongoose.model('Fitnesses');
