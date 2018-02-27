const INITIAL_STATE = {
  contacts: [],
  contact: {},
  search: '',
  contactLoaded: false,
  editMode: false,
  currentlyEditing: {}
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
    case 'TOGGLE_EDIT':
      var newState = Object.assign({}, state);
      newState.currentlyEditing = action.currentlyEditing;
      newState.editMode = action.editMode;
      return newState;
    case 'EDITING_CONTACT':
      var newState = Object.assign({}, state);
      newState.currentlyEditing[action.field] = action.value;
      return newState;
    case 'SAVE_CONTACT':
      var newState = Object.assign({}, state);
      newState.contact = action.contact;
      newState.currentlyEditing = action.currentlyEditing;
      newState.editMode = action.editMode;
      return newState;
    default:
      return state;
  }
}

module.exports = addressBookApp;
