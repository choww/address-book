var React = require('react');
var Enzyme = require('enzyme');
var Adapter = require('enzyme-adapter-react-16');
var ContactList = require('../../public/src/components/contact_list');
var helpers = require('../helpers/setup');

Enzyme.configure({ adapter: new Adapter() });

describe('Contact List Component', function() {
  var wrapper, contacts;

  beforeEach(function() {
    contacts = helpers.contacts;
    var store = helpers.store();
    var state = store.getState();
    var getContacts = jest.fn().mockImplementation(function(e) {
      state.contacts = contacts;
    });
    var getContact = jest.fn();
    wrapper = Enzyme.mount(<ContactList state={state}
                                        store={store}
                                        getContact={getContact}
                                        getContacts={getContacts}/>);
  });

  it('should call the getContacts event handler when component is mounted', function() {
    var method = wrapper.props().getContacts;
    expect(method).toBeCalled();
  });

  it('should render a list of contacts when component is mounted', function() {
    var element = wrapper.find('a');
    expect(element).toHaveLength(contacts.length);
  });

  it('should render the contact names when component is mounted', function() {
    var num = 0;
    wrapper.find('a').forEach(function(node) {
      var contact = contacts[num];
      var sample = node.text();
      var expected = `${contact.lastname}, ${contact.firstname}`
      expect(sample).toEqual(expected);
      num++;
    });
  });

  it('should call the getContact event handler when user clicks on a contact', function() {
    wrapper.find('a').first().simulate('click');
    var method = wrapper.props().getContact;
    expect(method).toBeCalled();
  });
});
