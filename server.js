var express = require('express');
var path = require('path');
var graphqlHTTP = require('express-graphql');
var graphql = require('graphql');
var schema = require('./graphql/schema');

var app = express();
var router = express.Router();
var dev = process.env.NODE_ENV == 'development';

// serve static files
app.use(express.static(path.join(__dirname, '/public')));

// graphQL
app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphql: dev
}));

app.get('/contacts/:id', function(request, response) {
  response.sendFile(__dirname + '/public/contact.html')
});

var root = router.get('/*', function(request, response) {
  response.sendFile(__dirname + '/public/index.html');
});

app.use(root);


app.listen(4040, function() {
  console.log("Express server running on port 4040: http://localhost:4040")
});
