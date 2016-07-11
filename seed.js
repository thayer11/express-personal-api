// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

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

// remove all records that match {} -- which means remove ALL records
db.Poems.remove({}, function(err, poems){
  if(err) {
    console.log('Error occurred in remove', err);
  } else {
    console.log('removed all books');

    // create new records based on the array books_list
    db.Poems.create(poems_list, function(err, poems){
      if (err) { return console.log('err', err); }
      console.log("created", Poems.length, "poems");
      process.exit();
    });
  }
});



// var new_campsite = {description: "Sharp rocks. Middle of nowhere."}

// db.Campsite.create(new_campsite, function(err, campsite){
//   if (err){
//     return console.log("Error:", err);
//   }

//   console.log("Created new campsite", campsite._id)
//   process.exit(); // we're all done! Exit the program.
// })
