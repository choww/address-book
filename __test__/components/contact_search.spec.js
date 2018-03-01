var React = require('react');
var Enzyme = require('enzyme');
var Adapter = require('enzyme-adapter-react-16');
var ContactSearch = require('../../public/src/components/contact_search');
var helpers = require('../helpers/setup');

Enzyme.configure({ adapter: new Adapter() });

describe('Contact Search Component', function() {
  var wrapper, contacts;

  beforeEach(function() {
    contacts = helpers.contacts;
    var store = helpers.store();
    var handleInputSubmission = jest.fn().mockImplementation(function(e) {
      return contacts.filter(function(contact) {
        var fullname = [contact.firstname, contact.lastname].join(' ').toLowerCase();
        return fullname.includes(e.target.value.toLowerCase());
      });
    });
    wrapper = Enzyme.shallow(<ContactSearch store={store}
                                            handleInputSubmission={jest.fn()}/>);
  });

  it('should render self', function() {
    var element = wrapper.find('input[placeholder="Search"]');
    expect(element.length).toBe(1);
  });

  it('should call the handleInputSubmission handler when user hits the Enter key', function() {
    wrapper.find('input[placeholder="Search"]').simulate('keypress', {key: 'Enter'});
    var method = wrapper.instance().props.handleInputSubmission;
    expect(method).toBeCalled();
  });
});

