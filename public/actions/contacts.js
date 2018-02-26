// action types //
const types = {
  GET_ONE_CONTACT: 'GET_ONE_CONTACT',
  GET_CONTACTS: 'GET_CONTACTS',
  SEARCH_CONTACTS: 'SEARCH_CONTACTS'
};

// actions //
var actions = {
  getContacts: function(data) {
    return {
      type: types.GET_CONTACTS,
      contacts: data
    };
  },
  getContact: function(data) {
    return {
      type: types.GET_ONE_CONTACT,
      contact: data,
      contactLoaded: true
    };
  },
  searchContacts: function(text) {
    return {
      type: types.SEARCH_CONTACTS,
      search: text
    };
  }
};

module.exports = actions;
