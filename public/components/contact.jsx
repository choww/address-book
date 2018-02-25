var React = require('react');
var ReactDOM = require('react-dom');

class Contact extends React.Component {
  render() {
    return (
      <strong>react test</strong>
    )
  }
}

ReactDOM.render(<Contact/>, document.getElementById('container'));
