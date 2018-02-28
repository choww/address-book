var React = require('react');
var Enzyme = require('enzyme');
var Adapter = require('enzyme-adapter-react-16');
var Contact = require('../../public/src/components/contact.jsx');
var helpers = require('../helpers/setup');
var ReactTestRenderer = require('react-test-renderer');

Enzyme.configure({ adapter: new Adapter() });

describe('Contact Component', function() {
  // editing a contact - state.editMode = false by default //
  describe('Editing a contact', function() {
    var wrapper, contact, fields, renderer;

    beforeEach(function() {
      contact = helpers.contact;
      var store = helpers.store();
      var state = store.getState();
      var toggleEdit = jest.fn().mockImplementation(function() {
        state.editMode = true;
      });
      wrapper = Enzyme.mount(<Contact state={state}
                                      store={store}
                                      contact={contact}
                                      toggleEdit={toggleEdit}
                                      editingContact={jest.fn()}
                                      saveContact={jest.fn()}/>);
    });

    it('should not display a Save button by default', function() {
      var element = wrapper.find('button[name="save"]');
      expect(element).toHaveLength(0);
    });

    it('should call the toggleEdit event handler when the Edit button is clicked', function() {
      wrapper.find('button[name="edit"]').simulate('click');
      var handler = wrapper.props().toggleEdit;
      expect(handler).toBeCalled();
    });

    it('should set state.editMode to true when the Edit button is clicked', function() {
      wrapper.find('button[name="edit"]').simulate('click');
      var state = wrapper.props().state.editMode;
      expect(state).toBe(true);
    });

    it('should call editingContact event handler when changing a field', function() {
      wrapper.find('[contentEditable]').first().simulate('change');
      expect(wrapper.props().editingContact).toBeCalled();
    });
  });

  // save contact - state.editMode = true by default //
  describe('Saving a contact', function() {
    var fields, wrapper, contact;
    beforeEach(function() {
      contact = helpers.contact;
      fields = ['firstname', 'lastname', 'email', 'phone', 'address'];
      var store = helpers.store();
      var state = store.getState();
      state.editMode = true;
      var saveContact = jest.fn(function() {
        state.editMode = false;
        state.currentlyEditing = {};
      });
      wrapper = Enzyme.mount(<Contact state={state}
                                    store={store}
                                    contact={contact}
                                    toggleEdit={jest.fn()}
                                    editingContact={jest.fn()}
                                    saveContact={saveContact}/>);
      wrapper.find('button[name="save"]').simulate('click');
    });

    it('should call the saveContact handler when the Save button is clicked', function() {
      var method = wrapper.props().saveContact;
      expect(method).toBeCalled();
    });

    it('should set state.editMode to false when Save button is clicked', function() {
      var state = wrapper.props().state.editMode;
      expect(state).toBe(false);
    });

    it('should set state.currentlyEditing back to {} when Save button is clicked', function() {
      var state = wrapper.props().state.currentlyEditing;
      expect(state).toEqual({});
    });
  });
});
