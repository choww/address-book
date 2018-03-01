var React = require('react');

var ContactProfile = require('../containers/contact_profile');
var ContactFilter = require('../containers/contact_filter');

class AddressBook extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.getContacts()
  }

  render() {
    var that = this;
    return (
       <div className="columns">
          <section className="section column is-4 hero is-fullheight contact-list">
            <h4>All Contacts</h4>
            <ContactFilter/>
            {
              this.props.contacts.map(function(contact) {
                return (
                  <div className="contact" key={contact.contactId}>
                    <a onClick={that.props.getContact} data-id={contact.contactId}>
                      {contact.lastname}, {contact.firstname}
                    </a>
                  </div>
                )
              })
            }
          </section>
          { this.props.contactLoaded &&
           <ContactProfile contact={this.props.contact}/>
          }
        </div>
    )
  }
}

module.exports = AddressBook;
