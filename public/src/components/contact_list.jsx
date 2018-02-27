var React = require('react');
var actions = require('../actions/contacts');
var api = require('../services/api');

class ContactList extends React.Component {
  constructor(props) {
    super(props);
    this.getContact = this.getContact.bind(this);
  }

  componentWillMount() {
    this.getContacts()
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

  // retrieve one selected contact
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

  render() {
    var state = this.props.state;
    var that = this;
    return (
      <div className="contacts">
        {
          state.contacts.map(function(contact) {
            return (
              <div className="contact">
                <a onClick={that.getContact} data-id={contact.contactId}>
                  {contact.lastname}, {contact.firstname}
                </a>
              </div>
            )
          })
        }
      </div>
    )
  }
}

module.exports = ContactList
