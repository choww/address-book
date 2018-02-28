var React = require('react');
var actions = require('../actions/contacts');
var api = require('../services/api');

class ContactSearch extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <input className="input is-rounded" type="text" placeholder="Search"
               value={this.props.state.search}
               onKeyPress={this.props.handleInputSubmission}
               onChange={this.props.handleInputChange} />
    )
  }
}

module.exports = ContactSearch;
