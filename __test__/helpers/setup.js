var reduxMock = require('redux-mock-store');
var helpers = {
  store: function(mockStore) {
    var store = reduxMock();
    return store(this.state);
  },
  state: {
    contacts: [],
    contact: {},
    search: '',
    contactLoaded: false,
    editMode: false,
    currentlyEditing: {}
  },
  contact: {contactId: 1, firstname: 'first', lastname: 'last'},
  contacts: [{contactId: 2, firstname: 'first2', lastname: 'test2'},
             {contactId: 3, firstname: 'first3', lastname: 'test3'}]
};

module.exports = helpers;
