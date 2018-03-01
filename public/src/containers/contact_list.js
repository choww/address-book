var redux = require('react-redux');
var actions = require('../actions/contacts');
var api = require('../services/api');
var AddressBook = require('../components/address_book');

const mapStateToProps = function(state, ownProps) {
  return {
    contacts: state.contacts,
    contact: state.contact,
    contactLoaded: state.contactLoaded
  };
};

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    // retrieve all contacts
    getContacts: function() {
      api.get('contacts', {}, 'contactId,firstname,lastname')
       .then(function(response) {
         var data = response.data.data.contacts;
         dispatch(actions.getContacts(data));
       });
    },
    // retrieve one contact by ID
    getContact: function(e) {
      var id = e.target.getAttribute('data-id');
      api.get('contact', {contactId: id})
         .then(function(response) {
          var data = response.data.data.contact;
          dispatch(actions.getContact(data));
         });
    }
  };
}

var ContactList = redux.connect(mapStateToProps, mapDispatchToProps)(AddressBook);

module.exports = ContactList;
