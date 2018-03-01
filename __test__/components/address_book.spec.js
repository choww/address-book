var React = require('react');
var Enzyme = require('enzyme');
var Adapter = require('enzyme-adapter-react-16');
var AddressBook = require('../../public/src/components/address_book');
var helpers = require('../helpers/setup');

Enzyme.configure({ adapter: new Adapter() });

describe('Address Book Component', function() {
  var wrapper, contacts;

  beforeEach(function() {
    var store = helpers.store;
    contacts = helpers.contacts;
    wrapper = Enzyme.shallow(<AddressBook store={store}
                                          contacts={contacts}
                                          getContact={jest.fn()}
                                          getContacts={jest.fn()}/>);
  });

  it('should render self', function() {
    var sample = wrapper.find('section').hasClass('contact-list');
    expect(sample).toBe(true);
  });

  it('should call the getContacts event handler when component is mounted', function() {
    var method = wrapper.instance().props.getContacts;
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
    var method = wrapper.instance().props.getContact;
    expect(method).toBeCalled();
  });
});
