// action types //
const types = {
  GET_CONTACT: 'GET_CONTACT',
  GET_CONTACTS: 'GET_CONTACTS',
  SEARCH_CONTACTS: 'SEARCH_CONTACTS',
  EDIT_CONTACT: 'EDIT_CONTACT',
  EDITING_CONTACT: 'EDITING_CONTACT',
  SAVE_CONTACT: 'SAVE_CONTACT'
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
      type: types.GET_CONTACT,
      contact: data,
      contactLoaded: true
    };
  },
  searchContacts: function(text) {
    return {
      type: types.SEARCH_CONTACTS,
      search: text
    };
  },
  editContact: function(contact) {
    return {
      type: types.EDIT_CONTACT,
      currentlyEditing: contact,
      editDisabled: false
    }
  },
  editingContact: function(data) {
    return {
      type: types.EDITING_CONTACT,
      field: data.field,
      value: data.value
    }
  },
  saveContact: function(data) {
    return {
      type: types.SAVE_CONTACT,
      editDisabled: true,
      currentlyEditing: {}, // resets once contact is saved
      contact: data
    }
  }
};

module.exports = actions;
