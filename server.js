// require express and other modules
var express = require('express'),
    app = express();

// parse incoming urlencoded form data
// and populate the req.body object
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

/************
 * DATABASE *
 ************/

var db = require('./models');

var poems = [
   { _id: 1, author: "Lew Welch", book: "Ring of Bone", poem: "Ring of Bone" },
   { _id: 2, author: "Richard Siken", book: "Crush", poem: "Snow and Dirty Rain" },
   { _id: 3, author: "William Carlos Williams", book: "Spring and All", poem:"The Right of Way" }
];

var nextID = 4;


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
  res.json({poems: poems});

});

app.get('/api/poems/:id', function show(req, res) {
  var searchID = parseInt(req.params.id);
  for (var i=0; i<poems.length; i++) {
    if(searchID === poems[i]._id){
      res.json(poems[i]);
    }
  }
});

app.post('/api/poems', function create(req, res) {
  var newPoem = req.body;
  newPoem._id = nextID;
  nextID++;
  poems.push(newPoem);
  res.json(newPoem);
  /* This endpoint will add a todo to our "database"
   * and respond with the newly created todo.
   */
});

app.post('/api/poems', function (req, res) {
  // create new book with form data (`req.body`)
  console.log('books create', req.body);
  var newPoem = req.body;
  newPoem.poem = nextPoem;
  nextPoem++;
  poems.push(newPoem);
  res.json(newPoem);
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
      {method: "GET", path: "/api", description: "Describes all available endpoints"},
      {method: "GET", path: "/api/profile", description: "Data about me"}, // CHANGE ME
      {method: "POST", path: "/api/poems", description: "Create a new poem"} // CHANGE ME
    ]
  })
});

app.get('/api/profile', function index(req, res) {
   res.json({profile: profile});
   });


/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
