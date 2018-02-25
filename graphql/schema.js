var graphql = require('graphql');
var GraphQLSchema = graphql.GraphQLSchema;
var GraphQLObjectType = graphql.GraphQLObjectType;
var GraphQLList = graphql.GraphQLList;
var GraphQLID = graphql.GraphQLID;
var GraphQLString = graphql.GraphQLString;

// list of contacts
var data = require('./contacts.json');

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
      contacts: {
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
