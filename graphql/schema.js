var graphql = require('graphql');
var GraphQLSchema = graphql.GraphQLSchema;
var GraphQLObjectType = graphql.GraphQLObjectType;
var GraphQLList = graphql.GraphQLList;
var GraphQLID = graphql.GraphQLID;
var GraphQLString = graphql.GraphQLString;

var data = {
  "contacts":[
    {
      "contactId": 1,
      "firstname":"Cameron",
      "lastname":"Dubas",
      "phone":"6047280012",
      "address":"289 Abbott St., Vancouver, BC, V3M 2L7",
      "email":"cameron@changeheroes.com"
    },
    {
      "contactId": 2,
      "firstname":"Mike",
      "lastname":"Tan",
      "phone":"6043421109",
      "address":"102 Homer St., Vancouver, BC, V2K 3G7",
      "email":"mike@changeheroes.com"
    }
  ]
};

var ContactType = new GraphQLObjectType({
  name: 'Contact',
  fields: function() {
    return {
    id: { type: GraphQLID },
    firstname: { type: GraphQLString },
    lastname: { type: GraphQLString },
    phone: { type: GraphQLString },
    address: { type: GraphQLString },
    email: { type: GraphQLString }
    }
  }
});


var schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'ContactQuery',
    fields: {
      contact: {
        type: new GraphQLList(ContactType),
        args: {},
        resolve: function(parent, params) {
          return data.contacts;
        }
      }
    }
  })
});

module.exports = schema;
