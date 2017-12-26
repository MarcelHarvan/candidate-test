var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    content: {type: String, require: true}
});

module.exports = mongoose.model('Rug', schema);