var React = require('react');
var ReactDOM = require('react-dom');

class ContactList extends React.Component { 
  render() {
    var contacts = JSON.parse(this.props.contacts);
    var that = this;
    return (
      <div>
        {
          contacts.map(function(contact) {
            return <div>{contact.lastname}, {contact.firstname}</div>
          })
        } 
      </div> 
    )
  }
}

module.exports = ContactList;
