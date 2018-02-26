var React = require('react');
var axios = require('axios');

class Contact extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var contact = this.props.contact;
    return (
      <section className="section column is-7">
        <h2 className="has-text-weight-bold">{contact.firstname} {contact.lastname}</h2>
        <div className="columns">
          <div className="column is-3">Phone</div>
          <div className="column">{contact.phone}</div>
        </div>
        <div className="columns">
          <div className="column is-3">Email</div>
          <div className="column">{contact.email}</div>
        </div>
        <div className="columns">
          <div className="column is-3">Address</div>
          <div className="column">{contact.address}</div>
        </div>
      </section>

    )
  }
}

module.exports = Contact;
