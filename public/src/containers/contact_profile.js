var redux = require('react-redux');
var actions = require('../actions/contacts');
var Contact = require('../components/contact');

const mapStateToProps = function(state, ownProps) {
  return {
    editMode: state.editMode,
    currentlyEditing: state.currentlyEditing
  }
};

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    // toggle edit mode
    toggleEdit: function(contact) {
      dispatch(actions.toggleEdit(contact));
    },
    // update data as contact info is being edited
    editingContact: function(e) {
      var params = {
        field: e.target.getAttribute('name'),
        value: e.target.value
      };
      dispatch(actions.editingContact(params));
    },
    // "saves" the contact
    saveContact: function(contact) {
      dispatch(actions.saveContact(contact));
    }
  };
};

var ContactProfile = redux.connect(mapStateToProps, mapDispatchToProps)(Contact);

module.exports = ContactProfile;
