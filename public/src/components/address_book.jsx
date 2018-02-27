var React = require('react');
var actions = require('../actions/contacts');
var api = require('../services/api');

// child components
var Contact = require('./contact.jsx');
var ContactList = require('./contact_list.jsx');
var ContactSearch = require('./contact_search.jsx');

class AddressBook extends React.Component {
  constructor(props) {
    super(props);
    this.getContacts = this.getContacts.bind(this);
    this.getContact = this.getContact.bind(this);
  }

  // retrieve all contacts //
  getContacts() {
    var that = this;
    api.get('contacts', {}, 'contactId,firstname,lastname')
       .then(function(response) {
         var data = response.data.data.contacts;
         that.props.store.dispatch(actions.getContacts(data));
       });
  }

  // retrieve one contact by ID
  getContact(e) {
    var id = e.target.getAttribute('data-id');
    var that = this;
    api.get('contact', {contactId: id})
       .then(function(response) {
        var data = response.data.data.contact;
        that.props.store.dispatch(actions.getContact(data));
       });
  }

  render() {
      var state = this.props.state;
      var store = this.props.store;
      return (
        <div className="columns">
          <section className="section column is-4 hero is-fullheight contact-list">
            <h4>All Contacts</h4>
            <ContactSearch state={state} store={store}/>
            <ContactList state={state} store={store} getContact={this.getContact} getContacts={this.getContacts}/>
          </section>
          { state.contactLoaded &&
            <Contact contact={state.contact} store={store} state={state}/>
          }
        </div>
      )
  }
}

module.exports = AddressBook;
