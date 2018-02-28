var React = require('react');

class Contact extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var contact = this.props.contact;
    var state = this.props.state;
    var store = this.props.store;
    return (
      <section className="section column is-7">
        <div className="field is-grouped is-grouped-right">
          <button className="button is-primary"
                  name="edit"
                  onClick={this.props.toggleEdit.bind(this, contact)}>
            Edit
          </button>
          { state.editMode &&
            <button className="button is-info"
                    name="save"
                    onClick={this.props.saveContact}>
              Save
            </button>
          }
        </div>
        <div className="columns">
          <h2 className="has-text-weight-bold">
            <div onChange={this.props.editingContact}
                  name="firstname"
                  contentEditable={state.editMode}>
              {contact.firstname}
            </div>
            &nbsp;
            <div onChange={this.props.editingContact}
                  name="lastname"
                  contentEditable={state.editMode}>
              {contact.lastname}
            </div>
          </h2>
        </div>
        <div className="columns">
          <div className="column is-3">Phone</div>
          <div onChange={this.props.editingContact}
               name="phone"
               contentEditable={state.editMode}>
            {contact.phone}
          </div>
        </div>
        <div className="columns">
          <div className="column is-3">Email</div>
          <div className="column"
               name="email"
               onChange={this.props.editingContact}
               contentEditable={state.editMode}>
            {contact.email}
          </div>
        </div>
        <div className="columns">
          <div className="column is-3">Address</div>
          <div className="column"
               name="address"
               onChange={this.props.editingContact}
               contentEditable={state.editMode}>
            {contact.address}
          </div>
        </div>
      </section>
    )
  }
}

module.exports = Contact;
