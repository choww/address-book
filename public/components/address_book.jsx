var React = require('react');
var ReactDOM = require('react-dom');
var actions = require('../actions/contacts');
var api = require('../services/api');

// child components
var Contact = require('./contact.jsx');
// var ContactSearch = require('./contact_search.jsx');

class AddressBook extends React.Component {
  constructor(props) {
    super(props);
    this.getContact = this.getContact.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInputSubmission = this.handleInputSubmission.bind(this);
  }

  componentWillMount() {
    this.getContacts()
  }

  // data retrieval //
  getContacts() {
    var that = this;
    api.get('contacts', {}, 'contactId,firstname,lastname')
       .then(function(response) {
         var data = response.data.data.contacts;
         that.props.store.dispatch(actions.getContacts(data));
       });
  }

  getContact(e) {
    var id = e.target.getAttribute('data-id');
    var that = this;
    api.get('contact',{contactId: id})
       .then(function(response) {
        var data = response.data.data.contact;
        that.props.store.dispatch(actions.getContact(data));
       })
       .catch(function(error) {
        console.log(error);
       });
  }

  // search form //
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
      var contacts = this.props.state.contacts;
      var that = this;
      return (
      <div className="columns">
        <section className="section column is-4 hero is-fullheight contact-list">
          <h4 className="has-text-weight-bold has-text-centered">All Contacts</h4>
          <input className="input is-rounded" type="text" placeholder="Search"
                 value={this.props.state.search}
                 onKeyPress={this.handleInputSubmission}
                 onChange={this.handleInputChange} />
          {
            contacts.map(function(contact) {
              return (
                <div className="contact">
                  <a onClick={that.getContact} data-id={contact.contactId}>
                    {contact.lastname}, {contact.firstname}
                  </a>
                </div>
              )
            })
          }
        </section>
        { this.props.state.contactLoaded && <Contact contact={this.props.state.contact}/> }
      </div>
    )
  }
}

module.exports = AddressBook;
