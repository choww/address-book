describe("Address Book Reducer", function() {
  var reducer = require('../../public/src/reducers/address_book');

  beforeEach(function() {
    contact = {contactId: 1, firstname: 'first', lastname: 'last'};
    contacts = [{contactId: 2, firstname: 'first2', lastname: 'test2'},
                {contactId: 3, firstname: 'first3', lastname: 'test3'}];
    INITIAL_STATE = {
      contacts: [],
      contact: {},
      search: '',
      contactLoaded: false,
      editMode: false,
      currentlyEditing: {}
    };
  });

  it('should return the initial state', function() {
    expect(reducer(INITIAL_STATE,'')).toEqual(INITIAL_STATE);
  });

  it('should handle GET_CONTACTS', function() {
    var action = {};
    expect(reducer(INITIAL_STATE, action)).toEqual(expected);
  });

  it('should handle GET_CONTAT', function() {
  });

  it('should handle SEARCH_CONTACT', function() {
  });

  it('should handle TOGGLE_EDIT', function() {
  });

  it('should handle EDITING_CONTACT', function() {
  });

  it('should handle SAVE_CONTACT', function() {
  });
});
