var mongoose = require('mongoose');

var fitness = new mongoose.Schema({
    transactionId: {type: String},
    solution: {type: String},
    fitness: {type: Number}
});

mongoose.model("Fitness", fitness);
module.exports.Fitness = mongoose.model('Fitness');
