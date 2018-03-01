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
    this.props.getContacts()
  }

  componentDidUpdate() {
    var id = this.props.match.params.id
    if (id) {
      this.props.getContact(this.props.match.params.id);
    }
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
                    <NavLink key={contact.contactId}
                             to={`/contacts/${contact.contactId}`}>
                      {contact.lastname}, {contact.firstname}
                    </NavLink>

                )
              })
            }
          </section>
          { this.props.match.params.id && <ContactProfile/> }
        </div>
    )
  }
}

module.exports = AddressBook;
