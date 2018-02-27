var types = require('./types');
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
  toggleEdit: function(contact) {
    return {
      type: types.TOGGLE_EDIT,
      currentlyEditing: contact,
      editMode: true
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
      editMode: false,
      currentlyEditing: {}, // resets once contact is saved
      contact: data
    }
  }
};

module.exports = actions;
