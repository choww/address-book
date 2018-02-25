var React = require('react');
var ReactDOM = require('react-dom');
var axios = require('axios');
// child components
var ContactList = require('./contact_list.jsx');
// var Contact = require('./contact.jsx');
// var ContactSearch = require('./contact_search.jsx');

class AddressBook extends React.Component {
  constructor(props) {
    super(props);
    this.getContact = this.getContact.bind(this);
    this.state = {
      contacts: [],
      contact: {},
      contactLoaded: false
    }
  }

  componentWillMount() {
    this.getContacts();
  }

  getContacts() {
    var that = this;
    axios.get('/graphql?query={contacts{contactId,firstname,lastname}}')
      .then(function(response) {
        var data = response.data.data.contacts;
        that.setState({ contacts: data });
      })
  }

  getContact(e) {
    var id = e.target.getAttribute('data-id');
    var that = this;
    axios.get(`/graphql?query={contact(contactId: ${id}){contactId,firstname,lastname,email,phone,address}}`)
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

  render() {
      var contacts = JSON.stringify(this.state.contacts);
      var that = this;
      return (
      <div className="columns">
        <section className="section column is-4 hero is-fullheight contact-list">
          <h4 className="has-text-weight-bold has-text-centered">All Contacts</h4>
          <input className="input is-rounded" type="text" placeholder="Search"/>
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
        { this.state.contactLoaded && <ContactList contact={this.state.contact}/> }
      </div>
    )
  }
}

ReactDOM.render(<AddressBook/>, document.getElementById('container'));
