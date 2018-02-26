var React = require('react');
var ReactDOM = require('react-dom');
var api = require('../services/api');

// child components
var Contact = require('./contact.jsx');
// var Contact = require('./contact.jsx');
// var ContactSearch = require('./contact_search.jsx');

class AddressBook extends React.Component {
  constructor(props) {
    super(props);
    this.getContact = this.getContact.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInputSubmission = this.handleInputSubmission.bind(this);
    this.state = {
      contacts: [],
      contact: {},
      search: '',
      contactLoaded: false
    }
  }

  componentWillMount() {
    this.getContacts();
  }

  // data retrieval //
  getContacts() {
    var that = this;
    api.get('contacts', {}, 'contactId,firstname,lastname')
       .then(function(response) {
         var data = response.data.data.contacts;
         that.setState({ contacts: data });
       });
  }

  getContact(e) {
    var id = e.target.getAttribute('data-id');
    var that = this;
    api.get('contact',{contactId: id})
       .then(function(response) {
         that.setState({
           contact: response.data.data.contact,
           contactLoaded: true
         });
       })
       .catch(function(error) {
        console.log(error);
       });
  }

  // search form //
  handleInputChange(e) {
    this.setState({ search: e.target.value });
  }

  handleInputSubmission(e) {
    if (e.key == 'Enter') {
      var that = this;
      api.get('contacts', {name: this.state.search})
         .then(function(response) {
           var data = response.data.data.contacts;
           that.setState({ contacts: data });
         });
    }
  }

  render() {
      var contacts = JSON.stringify(this.state.contacts);
      var that = this;
      return (
      <div className="columns">
        <section className="section column is-4 hero is-fullheight contact-list">
          <h4 className="has-text-weight-bold has-text-centered">All Contacts</h4>
          <input className="input is-rounded" type="text" placeholder="Search"
                 value={this.state.search}
                 onKeyPress={this.handleInputSubmission}
                 onChange={this.handleInputChange} />
          {
            JSON.parse(contacts).map(function(contact) {
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
        { this.state.contactLoaded && <Contact contact={this.state.contact}/> }
      </div>
    )
  }
}

ReactDOM.render(<AddressBook/>, document.getElementById('container'));
