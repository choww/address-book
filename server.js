var express = require('express');
var path = require('path');
var graphqlHTTP = require('express-graphql');
var graphql = require('graphql');
var schema = require('./graphql/schema');

var app = express();
var dev = process.env.NODE_ENV == 'development';

app.get('/', function(request, response) {
  response.sendFile(__dirname + '/public/index.html');
});

// graphQL
app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphql: dev
}));

// serve static files
app.use(express.static(path.join(__dirname, '/public')));

app.listen(4040, function() {
  console.log("Express server running on port 4040: http://localhost:4040")
});
