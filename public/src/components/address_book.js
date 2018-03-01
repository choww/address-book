var React = require('react');
var router = require('react-router-dom');
var ContactProfile = require('../containers/contact_profile');
var ContactFilter = require('../containers/contact_filter');
var NavLink = router.NavLink;

class AddressBook extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.getContacts();
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
                    <a key={contact.contactId}
                       onClick={that.props.getContact.bind(that, contact.contactId)}>
                      {contact.lastname}, {contact.firstname}
                    </a>

                )
              })
            }
          </section>
          <ContactProfile/>
        </div>
    )
  }
}

module.exports = AddressBook;
