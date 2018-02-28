var React = require('react');
var actions = require('../actions/contacts');
var api = require('../services/api');

// child components
var Contact = require('./contact');
var ContactList = require('./contact_list');
var ContactSearch = require('./contact_search');

class AddressBook extends React.Component {
  constructor(props) {
    super(props);
    this.getContacts = this.getContacts.bind(this);
    this.getContact = this.getContact.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.editingContact = this.editingContact.bind(this);
    this.saveContact = this.saveContact.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInputSubmission = this.handleInputSubmission.bind(this);
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

   // toggle edit mode
  toggleEdit(contact) {
    this.props.store.dispatch(actions.toggleEdit(contact));
  }

  // update data as contact info is being edited
  editingContact(e) {
    var params = {
      field: e.target.getAttribute('name'),
      value: e.target.value
    };
    this.props.store.dispatch(actions.editingContact(params));
  }

  // actually "saves" the contact
  saveContact() {
    var params = this.props.state.currentlyEditing;
    this.props.store.dispatch(actions.saveContact(params));
  }

  // contact search
   handleInputChange(e) {
    var searchTerm = e.target.value;
    this.props.store.dispatch(actions.searchContacts(searchTerm));
  }

   handleInputSubmission(e) {
    if (e.key == 'Enter') {
      var that = this;
      api.get('contacts', {name: this.props.state.search})
         .then(function(response) {
           var data = response.data.data.contacts;
           that.props.store.dispatch(actions.getContacts(data));
         });
    }
  }

  render() {
      var state = this.props.state;
      var store = this.props.store;
      return (
        <div className="columns">
          <section className="section column is-4 hero is-fullheight contact-list">
            <h4>All Contacts</h4>
            <ContactSearch state={state}
                           store={store}
                           handleInputChange={this.handleInputChange}
                           handleInputSubmission={this.handleInputSubmission}/>
            <ContactList state={state}
                         store={store}
                         getContact={this.getContact}
                         getContacts={this.getContacts}/>
          </section>
          { state.contactLoaded &&
            <Contact store={store}
                     state={state}
                     contact={state.contact}
                     toggleEdit={this.toggleEdit}
                     saveContact={this.saveContact}
                     editingContact={this.editingContact} />
          }
        </div>
      )
  }
}

module.exports = AddressBook;
