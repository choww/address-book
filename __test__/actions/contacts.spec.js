var helpers = require('../helpers/setup');

describe("Contacts Actions", function() {
  var actions = require('../../public/src/actions/contacts');
  var contact, contacts;

  beforeEach(function() {
    contact = helpers.contact;
    contacts = helpers.contacts;
  });

  it("should create an action for retrieving a contact", function() {
    var expected = {type: 'GET_CONTACT', contact: contact, contactLoaded: true};
    expect(actions.getContact(contact)).toEqual(expected);
  });

  it("should create an action for retrieving all contacts", function() {
    var expected = { type: 'GET_CONTACTS', contacts: contacts };
    expect(actions.getContacts(contacts)).toEqual(expected);
  });

  it("should create an action for searching a contact", function() {
    var expected = { type: 'SEARCH_CONTACTS', search: 'search word' };
    expect(actions.searchContacts('search word')).toEqual(expected);
  });

  it("should create an action for toggling edit contact mode", function() {
    var expected = { type: 'TOGGLE_EDIT', currentlyEditing: contact, editMode: true };
    expect(actions.toggleEdit(contact)).toEqual(expected);
  });

  it("should create an action for editing a contact", function() {
    var params = {field: 'firstname', value: 'carmen'}
    var expected = { type: 'EDITING_CONTACT', field: params.field, value: params.value };
    expect(actions.editingContact(params)).toEqual(expected);
  });

  it("should create an action for saving an edited contact", function() {
    var expected = { type: 'SAVE_CONTACT', editMode: false, currentlyEditing: {}, contact: contact };
    expect(actions.saveContact(contact)).toEqual(expected);
  });
});


