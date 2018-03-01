var React = require('react');

class Contact extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    if (this.props.match) {
      var id = this.props.match.params.id;
      this.props.getContact(id);
    }
  }


  render() {
    var contact = this.props.contact;
    var editMode = this.props.editMode;
    var editingContact = this.props.editingContact;
    return (
      <section className="section column is-7">
        <div className="field is-grouped is-grouped-right">
          <button className="button is-primary"
                  name="edit"
                  onClick={this.props.toggleEdit.bind(this, contact)}>
            Edit
          </button>
          { editMode &&
            <button className="button is-info"
                    name="save"
                    onClick={this.props.saveContact.bind(this, this.props.currentlyEditing)}>
              Save
            </button>
          }
        </div>
        <div className="contact-name columns">
          <div className="column is-3"
               onChange={editingContact}
               name="firstname"
               contentEditable={editMode}>
            {contact.firstname}
          </div>
          &nbsp;
          <div className="column is-3"
               onChange={editingContact}
               name="lastname"
               contentEditable={editMode}>
            {contact.lastname}
          </div>
        </div>
        <div className="columns">
          <div className="column is-3">Phone</div>
          <div className="column"
               onChange={editingContact}
               name="phone"
               contentEditable={editMode}>
            {contact.phone}
          </div>
        </div>
        <div className="columns">
          <div className="column is-3">Email</div>
          <div className="column"
               name="email"
               onChange={editingContact}
               contentEditable={editMode}>
            {contact.email}
          </div>
        </div>
        <div className="columns">
          <div className="column is-3">Address</div>
          <div className="column"
               name="address"
               onChange={editingContact}
               contentEditable={editMode}>
            {contact.address}
          </div>
        </div>
      </section>
    )
  }
}

module.exports = Contact;
