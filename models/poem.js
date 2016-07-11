var mongoose = require('mongoose');

var PoemSchema = new mongoose.Schema({
  book: String,
  author: String,
  poem: String,

});

var Poems = mongoose.model("Poems", PoemSchema);

module.exports = Poems;

