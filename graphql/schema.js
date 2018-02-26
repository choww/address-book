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
    contactId: { type: GraphQLID },
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
        args: {
          name: { type: GraphQLString }
        },
        resolve: function(parent, params) {
          if (Object.keys(params).length == 0) { return data.contacts; }
          var filtered = data.contacts.filter(function(contact) {
            var fullname = [contact.firstname, contact.lastname].join(' ').toLowerCase();
            return fullname.includes(params.name.toLowerCase());
          });
          return filtered;
        }
      },
      contact: {
        type: ContactType,
        args: {
          contactId: { type: GraphQLID }
        },
        resolve: function(parent, params) {
          var filtered = data.contacts.find(function(contact) {
            return contact.contactId == params.contactId;
          });
          return filtered;
        }
      }
    }
  })
});

module.exports = schema;
