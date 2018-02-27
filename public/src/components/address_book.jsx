var React = require('react');
var actions = require('../actions/contacts');
var api = require('../services/api');

// child components
var Contact = require('./contact.jsx');
var ContactList = require('./contact_list.jsx');
var ContactSearch = require('./contact_search.jsx');

class AddressBook extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
      var state = this.props.state;
      var store = this.props.store;
      return (
        <div className="columns">
          <section className="section column is-4 hero is-fullheight contact-list">
            <h4 className="has-text-weight-bold has-text-centered">All Contacts</h4>
            <ContactSearch state={state} store={store}/>
            <ContactList state={state} store={store}/>
          </section>
          { state.contactLoaded &&
            <Contact contact={state.contact} store={store} state={state}/>
          }
        </div>
      )
  }
}

module.exports = AddressBook;
