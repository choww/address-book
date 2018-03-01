var React = require('react');
var Enzyme = require('enzyme');
var Adapter = require('enzyme-adapter-react-16');
var Contact = require('../../public/src/components/contact');
var helpers = require('../helpers/setup');

Enzyme.configure({ adapter: new Adapter() });

describe('Contact Component', function() {
  // editing a contact - state.editMode = false by default //
  describe('Editing a contact', function() {
    var wrapper, fields, renderer;

    beforeEach(function() {
      var contact = helpers.contact;
      var store = helpers.store;
      fields = ['firstname', 'lastname','phone','email','address'];
      wrapper = Enzyme.shallow(<Contact store={store}
                                        match={{params: {id: 1}}}
                                        contact={contact}
                                        editMode={false}
                                        getContact={jest.fn()}
                                        currentlyEditing={{}}
                                        toggleEdit={jest.fn()}
                                        saveContact={jest.fn()}
                                        editingContact={jest.fn()}/>);
    });

    it('should call the getContact event handler before component is mounted if there are match params', function() {
      var method = wrapper.instance().props.getContact;
      expect(method).toBeCalled();
    });

    it('should render self', function() {
      var element = wrapper.find('[contentEditable]');
      expect(element).toHaveLength(fields.length);
    });

    it('should not display a Save button by default', function() {
      var element = wrapper.find('button[name="save"]');
      expect(element).toHaveLength(0);
    });

    it('should call the toggleEdit event handler when the Edit button is clicked', function() {
      wrapper.find('button[name="edit"]').simulate('click');
      var handler = wrapper.instance().props.toggleEdit;
      expect(handler).toBeCalled();
    });

    it('should call editingContact event handler when changing a field', function() {
      wrapper.find('[contentEditable]').first().simulate('change', {target: {value: 'hi'}});
      expect(wrapper.instance().props.editingContact).toBeCalled();
    });
  });

  // save contact - state.editMode = true by default //
  describe('Saving a contact', function() {
    var fields, wrapper, contact;
    beforeEach(function() {
      var store = helpers.store;
      contact = helpers.contact;
      wrapper = Enzyme.shallow(<Contact store={store}
                                               contact={contact}
                                               editMode={true}
                                               currentlyEditing={{}}
                                               toggleEdit={jest.fn()}
                                               saveContact={jest.fn()}
                                               editingContact={jest.fn()}/>);
      wrapper.find('button[name="save"]').simulate('click');
    });

    it('should call the saveContact handler when the Save button is clicked', function() {
      var method = wrapper.instance().props.saveContact;
      expect(method).toBeCalled();
    });
  });
});
