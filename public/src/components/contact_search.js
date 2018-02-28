var React = require('react');
var actions = require('../actions/contacts');
var api = require('../services/api');

class ContactSearch extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInputSubmission = this.handleInputSubmission.bind(this);
  }

  handleInputChange(e) {
    var searchTerm = e.target.value;
    this.props.store.dispatch(actions.searchContacts(searchTerm));
  }

   handleInputSubmission(e) {
    if (e.key == 'Enter') {
      var that = this;
      api.get('contacts', {name: this.props.state.search})
         .then(function(response) {
           var data = response.data.data.contacts;
           that.props.store.dispatch(actions.getContacts(data));
         });
    }
  }

  render() {
    return (
      <input className="input is-rounded" type="text" placeholder="Search"
               value={this.props.state.search}
               onKeyPress={this.handleInputSubmission}
               onChange={this.handleInputChange} />
    )
  }
}

module.exports = ContactSearch;
