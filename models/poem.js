var mongoose = require('mongoose');

var PoemSchema = new mongoose.Schema({
  book: String,
  author: String,
  poem: String,

});

var Poem = mongoose.model("Poems", PoemSchema);

module.exports = Poem;

