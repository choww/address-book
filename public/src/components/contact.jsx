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
  // TODO: updates state.contacts
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
          { !state.editDisabled &&
            <button className="button is-info"
                    onClick={this.saveContact}>
              Save
            </button>
          }
        </div>
        <div className="columns">
          <div className="column is-3">
            <input className="input"
                   onChange={this.editingContact}
                   name="firstname"
                   defaultValue={contact.firstname}
                   disabled={state.editDisabled}/>
          </div>
          <div className="column">
            <input className="input"
                   onChange={this.editingContact}
                   name="lastname"
                   defaultValue={contact.lastname}
                   disabled={state.editDisabled}/>
          </div>
        </div>
        <div className="columns">
          <div className="column is-3">Phone</div>

          <div className="column">
            <input className="input"
                 name="phone"
                 onChange={this.editingContact}
                 defaultValue={contact.phone}
                 disabled={state.editDisabled}/>
          </div>
        </div>
        <div className="columns">
          <div className="column is-3">Email</div>
          <div className="column">
            <input className="input"
                   name="email"
                   onChange={this.editingContact}
                   defaultValue={contact.email}
                   disabled={state.editDisabled}/>
          </div>
        </div>
        <div className="columns">
          <div className="column is-3">Address</div>
          <div className="column">
            <input className="input"
                 name="address"
                 onChange={this.editingContact}
                 defaultValue={contact.address}
                 disabled={state.editDisabled}/>
          </div>
        </div>
      </section>
    )
  }
}

module.exports = Contact;
