var React = require('react');
var axios = require('axios');

class ContactList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var contact = this.props.contact;
    return (
      <div className="column is-7">
        <h2>{contact.firstname} {contact.lastname}</h2>
        <div>Phone {contact.phone}</div>
        <div>Email {contact.email}</div>
        <div>Address {contact.address}</div>
      </div>

    )
  }
}

module.exports = ContactList;
