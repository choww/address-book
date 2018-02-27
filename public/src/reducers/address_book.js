const INITIAL_STATE = {
  contacts: [],
  contact: {},
  search: '',
  contactLoaded: false,
  editDisabled: true,
  currentlyEditing: {
    firstname: '',
    lastname: '',
    phone: '',
    email: '',
    address: ''
  }
};

var addressBookApp = function(state=INITIAL_STATE, action) {
  switch (action.type) {
    case 'GET_CONTACTS':
      var newState = Object.assign({}, state);
      newState.contacts = action.contacts;
      return newState;
    case 'GET_CONTACT':
      var newState = Object.assign({}, state);
      newState.contactLoaded = action.contactLoaded;
      newState.contact = action.contact;
      return newState;
    case 'SEARCH_CONTACTS':
      var newState = Object.assign({}, state);
      newState.search = action.search;
      return newState;
    case 'EDIT_CONTACT':
      var newState = Object.assign({}, state);
      newState.currentlyEditing = action.currentlyEditing;
      newState.editDisabled = action.editDisabled;
      return newState;
    case 'EDITING_CONTACT':
      var newState = Object.assign({}, state);
      newState.currentlyEditing[action.field] = action.value;
      return newState;
    case 'SAVE_CONTACT':
      var newState = Object.assign({}, state);
      newState.contact = action.contact;
      newState.currentlyEditing = action.currentlyEditing;
      newState.editDisabled = action.editDisabled;
      return newState;
    default:
      return state;
  }
}

module.exports = addressBookApp;
