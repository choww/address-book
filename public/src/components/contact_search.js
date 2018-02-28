var React = require('react');

class ContactSearch extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <input className="input is-rounded" type="text" placeholder="Search"
               defaultValue={this.props.search}
               onKeyPress={this.props.handleInputSubmission}/>
    )
  }
}

module.exports = ContactSearch;
