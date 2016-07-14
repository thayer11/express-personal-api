var mongoose = require('mongoose');
var express = require('express');
    app = express();


var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/************
 * DATABASE *
 ************/

var db = require('./models');

var profile = [
{
  name: "Holly Coddington",
  github_link: "http://github.com/thayer11",
  current_city: "Denver",
  pets:[
    {name: "Charlie", type: "Dog", breed: "God Loves a Terrier"},
    {name: "Loise", type: "Dog", breed: "God Loves a Terrier"},
    {name: "Jack", type: "Dog", breed: "God Loves a Terrier"},
    {name: "Max", type: "Dog", breed: "Blue Healer"}
    ],
  family_members: [ 
  { name: 'Barbara Coddington', relationship: 'mother'}, 
  { name: 'David Coddington', relationship: 'father' },
  { name: 'Chris Coddington', relationship: 'brother'}
    ]
      }
  ];


/**********
 * ROUTES *
 **********/

// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`
app.use(express.static('public'));

/*
 * HTML Endpoints
 */

app.get('/', function homepage(req, res) {
res.sendFile(__dirname + '/views/index.html');
});


app.get('/api/poems', function index(req, res) {
  db.Poem.find(function(err, poems){
  if (err) {return console.log("index error: " + err);}
  res.json(poems);
  });
});

app.get('/api/poems/:id', function (req, res) {
  db.Poem.findOne({_id: req.params.id }, function(err, poems) {
    res.json(poems);
  });
});

app.put('/api/poems/:id', function update(req, res) {
  var updateID = req.params.id;
  var update = req.body;
  db.Poem.findOneAndUpdate({_id: updateID}, update, function(err, poems){
    if (err) { return console.log("create error: " + err); }
    res.json(poems);
  });
});

app.delete('/api/poems/:id', function (req, res) {
 var oneToDelete = req.params.id;
 db.Poem.findOneAndRemove({ _id: oneToDelete}, function (err, deletedPoem) {
   res.json(deletedPoem);
 });
});

app.post('/api/poems', function (req, res) {
  var newPoem = req.body;
  console.log(newPoem);

db.Poem.create(newPoem, function(err, poems){
    if (err){
      res.send("Error " + err);
    }
    res.json(poems);
  });
});

/*
 * JSON API Endpoints
 */

app.get('/api', function api_index(req, res) {
  // TODO: Document all your api endpoints below
  res.json({
    woops_i_has_forgot_to_document_all_my_endpoints: true, // CHANGE ME ;)
    message: "Welcome to my personal api! Here's what you need to know!",
    documentation_url: "https://github.com/example-username/express_self_api/README.md", // CHANGE ME
    base_url: "http://YOUR-APP-NAME.herokuapp.com", // CHANGE ME
    endpoints: [
      {method: "GET", path: "/api", description: "Describes all available endpoints."},
      {method: "GET", path: "/api/profile", description: "Data about me."}, // CHANGE ME
      {method: "GET", path: "/api/poems", description: "Gets list of favorite songs."},
      {method: "GET", path: "/api/poems/:id", description: "Find one poem."},
      {method: "PUT", path: "/api/poems/:id", description: "Update a poem!"},
      {method: "DELETE", path: "/api/poems/:id", description: "Delete a poem"},
      {method: "POST", path: "/api/poems", description: "Add a new favorite poem"} // CHANGE ME
    ]
  })
});

app.get('/api/profile', function index(req, res) {
   res.json({profile: profile});
   });

//PUT ??
//POST ??

/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});

