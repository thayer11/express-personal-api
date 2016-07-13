var db = require('./models');

var poems_list = [
  {
  book: "Stag's Leap",
  author: "Sharon Olds",
  poem: "The Healers",
  },
  {
  book: "Supplication",
  author: "John Wieners",
  poem: "A poem for the insane",
  },
  {
  book: "Destroyer and Perserver",
  author: "Matthew Rohrer",
  poem: "Poem for Starlings",
  },
  {
  book: "Our Andromeda",
  author: "Brenda Shaughnessy",
  poem: "Our Andromeda",
  },
  {
  book: "After Lorca",
  author: "Jack Spicer",
  poem: "Suicide",
  },
  {
  book: "Medieval Scenes",
  author: "Robert Duncan",
  poem: "The Mirror",
  },
  {
  book: "Not Me",
  author: "Eileen Myles",
  poem: "An American Poem",
  },
  {
  book: "The End of the West",
  author: "Michael Dickman",
  poem: "My Dead Friends Come Back",
  }
];


db.Poem.remove({}, function(err, poems){
  if(err) {
    console.log('Error occurred in remove', err);
  } else {
    console.log('removed all books');

    
    db.Poem.create(poems_list, function(err, poems){
      if (err) { return console.log('err', err); }
      console.log("created" + poems_list.length + "poems");
      process.exit();
    });
  }
});

