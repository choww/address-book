var React = require('react');
var ReactDOM = require('react-dom');
var axios = require('axios');
// child components
var ContactList = require('./contact_list.jsx');
// var Contact = require('./contact.jsx');
// var ContactSearch = require('./contact_search.jsx');

class AddressBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: []
    }
  }

  componentWillMount() {
    this.getContacts();
  }

  getContacts() {
    var that = this;
    axios.get('/graphql?query={contacts{id,firstname,lastname}}')
      .then(function(response) {  
        var data = response.data.data.contacts;
        that.setState({ contacts: data });
      })
  }

  render() {
    return (
      <div className="column is-4">
        <ContactList contacts={JSON.stringify(this.state.contacts)} />
      </div>
    )
  }
}

ReactDOM.render(<AddressBook/>, document.getElementById('container'));
