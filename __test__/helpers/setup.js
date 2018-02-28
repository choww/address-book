var reduxMock = require('redux-mock-store');
var helpers = {
  store: function(contacts=[]) {
    var store = reduxMock();
    return store(this.state(contacts));
  },
  state: function(contacts) {
    return {
      contacts: contacts,
      contact: {},
      search: '',
      contactLoaded: false,
      editMode: false,
      currentlyEditing: {}
    };
  },
  contact: {contactId: 1, firstname: 'first', lastname: 'last'},
  contacts: [{contactId: 1, firstname: 'first', lastname: 'test'},
             {contactId: 2, firstname: 'first2', lastname: 'test2'},
             {contactId: 3, firstname: 'carmen', lastname: 'chow'}]
};

module.exports = helpers;
