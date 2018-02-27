var React = require('react');

class ContactList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.getContacts()
  }

  render() {
    var state = this.props.state;
    var that = this;
    return (
      <div className="contacts">
        {
          state.contacts.map(function(contact) {
            return (
              <div className="contact" key={contact.contactId}>
                <a onClick={that.props.getContact} data-id={contact.contactId}>
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

module.exports = ContactList;
