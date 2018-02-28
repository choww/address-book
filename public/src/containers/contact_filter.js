var redux = require('react-redux');
var actions = require('../actions/contacts');
var api = require('../services/api');
var ContactSearch = require('../components/contact_search');

const mapStateToProps = function(state, ownProps) {
  return {};
};

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    handleInputSubmission: function(e) {
      if (e.key == 'Enter') {
        var that = this;
        api.get('contacts', {name: e.target.value})
           .then(function(response) {
             var data = response.data.data.contacts;
             dispatch(actions.getContacts(data));
           });
      }
    }
  };
};

var ContactFilter = redux.connect(mapStateToProps, mapDispatchToProps)(ContactSearch);

module.exports = ContactFilter;
