var React = require('react');
var actions = require('../actions/contacts');

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.editContact = this.editContact.bind(this);
    this.editingContact = this.editingContact.bind(this);
    this.saveContact = this.saveContact.bind(this);
  }

  // toggle edit mode
  editContact() {
    this.props.store.dispatch(actions.editContact(this.props.contact));
  }

  // update data as contact info is being edited
  editingContact(e) {
    var params = {
      field: e.target.getAttribute('name'),
      value: e.target.value
    };
    this.props.store.dispatch(actions.editingContact(params));
  }

  // actually "saves" the contact
  saveContact() {
    var params = this.props.state.currentlyEditing
    this.props.store.dispatch(actions.saveContact(params));
  }

  render() {
    var contact = this.props.contact;
    var state = this.props.state;
    return (
      <section className="section column is-7">
        <div className="field is-grouped is-grouped-right">
          <button className="button is-primary"
                  onClick={this.editContact}>
            Edit
          </button>
          { state.editMode &&
            <button className="button is-info"
                    onClick={this.saveContact}>
              Save
            </button>
          }
        </div>
        <div className="columns">
          <h2 className="has-text-weight-bold">
            <span onChange={this.editingContact}
                  name="firstname"
                  contentEditable={state.editMode}>
              {contact.firstname}
            </span>
            &nbsp;
            <span onChange={this.editingContact}
                  name="lastname"
                  contentEditable={state.editMode}>
              {contact.lastname}
            </span>
          </h2>
        </div>
        <div className="columns">
          <div className="column is-3">Phone</div>
          <div className="column"
               name="phone"
               onChange={this.editingContact}
               contentEditable={state.editMode}>
            {contact.phone}
          </div>
        </div>
        <div className="columns">
          <div className="column is-3">Email</div>
          <div className="column"
               name="email"
               onChange={this.editingContact}
               contentEditable={state.editMode}>
            {contact.email}
          </div>
        </div>
        <div className="columns">
          <div className="column is-3">Address</div>
          <div className="column"
               name="address"
               onChange={this.editingContact}
               contentEditable={state.editMode}>
            {contact.address}
          </div>
        </div>
      </section>
    )
  }
}

module.exports = Contact;
