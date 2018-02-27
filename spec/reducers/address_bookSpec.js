describe("Address Book Reducer", function() {
  var reducer = require('../../public/src/reducers/address_book');
  var actions = require('../../public/src/actions/contacts');

  beforeEach(function() {
    contact = {contactId: 1, firstname: 'first', lastname: 'last'};
    contacts = [{contactId: 2, firstname: 'first2', lastname: 'test2'},
                {contactId: 3, firstname: 'first3', lastname: 'test3'}];
    state = {
      contacts: [],
      contact: {},
      search: '',
      contactLoaded: false,
      editMode: false,
      currentlyEditing: {}
    };
  });

  it('should return the initial state', function() {
    expect(reducer(state,'')).toEqual(state);
  });

  it('should handle GET_CONTACTS', function() {
    var action = actions.getContacts(contacts);
    var sample = reducer(state, action).contacts;
    expect(sample).toEqual(contacts);
  });

  it('should handle GET_CONTAT', function() {
    var action = actions.getContact(contact);
    var reduced = reducer(state, action);
    var sample = {contactLoaded: reduced.contactLoaded,
                  contact: reduced.contact}
    var expected = {contactLoaded: true, contact: contact}
    expect(sample).toEqual(expected);
  });

  it('should handle SEARCH_CONTACTS', function() {
    var action = actions.searchContacts('word');
    var sample = reducer(state, action).search;
    expect(sample).toEqual('word');
  });

  it('should handle TOGGLE_EDIT', function() {
    var action = actions.toggleEdit(contact);
    var reduced = reducer(state, action);
    var sample = {currentlyEditing: reduced.currentlyEditing,
                  editMode: reduced.editMode};
    var expected = {currentlyEditing: contact, editMode: true};
    expect(sample).toEqual(expected);
  });

  it('should handle EDITING_CONTACT', function() {
    var params = {field: 'firstname', value: 'carmen'};
    var action = actions.editingContact(params);
    var sample = reducer(state, action).currentlyEditing;
    var expected = {firstname: 'carmen'}
    expect(sample).toEqual(expected);
  });

  it('should handle SAVE_CONTACT', function() {
    var action = actions.saveContact(contact);
    var reduced = reducer(state, action);
    var sample = {editMode: reduced.editMode,
                  currentlyEditing: reduced.currentlyEditing,
                  contact: reduced.contact};
    var expected = {editMode: false, currentlyEditing: {}, contact: contact};
    expect(sample).toEqual(expected);
  });
});
