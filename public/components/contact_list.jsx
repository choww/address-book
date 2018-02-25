var React = require('react');
var axios = require('axios');

class ContactList extends React.Component {
  constructor(props) {
    super(props);
    this.getContact = this.getContact.bind(this);
  } 

  getContact(e) {
    var id = e.target.getAttribute('data-id');
    axios.get(`/graphql?query={contact(contactId: ${id}){contactId,firstname,lastname,email}}`)
         .then(function(response) { 
           console.log(response.data);
           return response.data;
         })
         .catch(function(error) {
          console.log(error);
         });
  }

  render() {
    var contacts = JSON.parse(this.props.contacts);
    var that = this;
    return (
      <div>
        {
          contacts.map(function(contact) {
            return (
              <div onClick={that.getContact} data-id={contact.contactId}>
                {contact.lastname}, {contact.firstname}
              </div>
            )
          })
        } 
      </div> 
    )
  }
}

module.exports = ContactList;
