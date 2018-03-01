var actionTypes = require('../actions/types');

const INITIAL_STATE = {
  contacts: [],
  contact: {},
  contactLoaded: false,
  editMode: false,
  currentlyEditing: {}
};

var addressBookApp = function(state=INITIAL_STATE, action) {
  switch (action.type) {
    case actionTypes.GET_CONTACTS:
      var newState = Object.assign({}, state);
      newState.contacts = action.contacts;
      return newState;
    case actionTypes.GET_CONTACT:
      var newState = Object.assign({}, state);
      newState.contactLoaded = action.contactLoaded;
      newState.contact = action.contact;
      newState.contactId = action.contactId;
      return newState;
    case actionTypes.TOGGLE_EDIT:
      var newState = Object.assign({}, state);
      newState.currentlyEditing = action.currentlyEditing;
      newState.editMode = action.editMode;
      return newState;
    case actionTypes.EDITING_CONTACT:
      var newState = Object.assign({}, state);
      newState.currentlyEditing[action.field] = action.value;
      return newState;
    case actionTypes.SAVE_CONTACT:
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
