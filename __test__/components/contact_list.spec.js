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
    expect(wrapper.props().getContacts.mock.calls.length).toBe(1);
  });

  it('should render a list of contacts when component is mounted', function() {
    expect(wrapper.find('a')).toHaveLength(contacts.length);
  });

  it('should render the contact names when component is mounted', function() {
    var num = 0;
    wrapper.find('a').forEach(function(node) {
      var contact = contacts[num];
      expect(node.text()).toEqual(`${contact.lastname}, ${contact.firstname}`);
      num++;
    });
  });

  it('should call the getContact event handler when user clicks on a contact', function() {
    wrapper.find('a').first().simulate('click');
    expect(wrapper.props().getContact.mock.calls.length).toBe(1);
  });
});
