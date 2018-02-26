const INITIAL_STATE = {
  contacts: [],
  contact: {},
  search: '',
  contactLoaded: false
};

var addressBook = function(state=INITIAL_STATE, action) {
  switch (action.type) {
    case 'GET_CONTACTS':
      var newState = Object.assign({}, state);
      newState.contacts = action.contacts;
      return newState;
    case 'GET_ONE_CONTACT':
      var newState = Object.assign({}, state);
      newState.contactLoaded = action.contactLoaded;
      newState.contact = action.contact;
      return newState;
    case 'SEARCH_CONTACTS':
      var newState = Object.assign({}, state);
      newState.search = action.search;
      return newState;
    default:
      return state;
  }
}

module.exports = addressBook;
