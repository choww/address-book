var React = require('react');
var Enzyme = require('enzyme');
var Adapter = require('enzyme-adapter-react-16');
var Contact = require('../../public/src/components/contact.jsx');
var helpers = require('../helpers/setup');

Enzyme.configure({ adapter: new Adapter() });

describe('Contact Component', function() {
  var wrapper, contact, fields;

  beforeEach(function() {
    contact = helpers.contact;
    fields = ['firstname', 'lastname', 'email', 'phone', 'address'];
    var store = helpers.store();
    var state = store.getState();
    wrapper = Enzyme.mount(<Contact state={state}
                                    store={store}
                                    contact={contact}/>);
  });

  it('should have no editable fields by default', function() {
    expect(wrapper.find('[contentEditable="true"]')).toHaveLength(0);
  });

  it('should not display a Save button by default', function() {
    expect(wrapper.find('button[name="save"]')).toHaveLength(0);
  });

  xit('should call the toggleEdit event handler when the Edit button is clicked', function() {
  });

  it('should set state.editMode to true when the Edit button is clicked', function() {
    wrapper.find('button[name="edit"]').simulate('click');
  });

  xit('should show a Save button when the Edit button is clicked', function() {
  });

  // editing a contact //
  xit("should render editable fields for all of the contact's information", function() {
    expect(wrapper.find('[contentEditable="true"]')).toHaveLength(fields.length);
  });
});
