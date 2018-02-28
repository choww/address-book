var React = require('react');
var Enzyme = require('enzyme');
var Adapter = require('enzyme-adapter-react-16');
var ContactSearch = require('../../public/src/components/contact_search');
var helpers = require('../helpers/setup');

Enzyme.configure({ adapter: new Adapter() });

describe('Address Book Component', function() {
  var wrapper, contacts;

  beforeEach(function() {
    contacts = helpers.contacts;
    var store = helpers.store();
    var state = helpers.state();
    var handleInputChange = jest.fn().mockImplementation(function(e) {
      state.search = e.target.value;
    });
    var handleInputSubmission = jest.fn().mockImplementation(function(e) {
      state.contacts = contacts.filter(function(contact) {
        var fullname = [contact.firstname, contact.lastname].join(' ').toLowerCase();
        return fullname.includes(state.search.toLowerCase());
      });
    });
    wrapper = Enzyme.mount(<ContactSearch state={state}
                                          store={store}
                                          handleInputChange={handleInputChange}
                                          handleInputSubmission={handleInputSubmission}/>);
  });

  it('should call the handleInputChange event handler when value of search input changes', function() {
    wrapper.find('input[placeholder="Search"]').simulate('change');
    var method = wrapper.props().handleInputChange;
    expect(method).toBeCalled();
  });

  it('should change state.search to equal the search term', function() {
    wrapper.find('input[placeholder="Search"]').simulate('change', {target: {value: 'first'}});
    var state = wrapper.props().state.search;
    expect(state).toEqual('first');
  });

  it('should call the handleInputSubmission handler when user hits the Enter key', function() {
    wrapper.find('input[placeholder="Search"]').simulate('keypress', {key: "Enter"});
    var method = wrapper.props().handleInputSubmission;
    expect(method).toBeCalled();
  });

  it('should retrieve a list of contacts that contain the characters in the search field', function() {
    wrapper.find('input[placeholder="Search"]').simulate('change', {target: {value: 'test'}})
                                               .simulate('keypress', {key: 'Enter'});
    var state = wrapper.props().state.contacts;
    expect(state).toEqual(contacts.slice(0,2));
  });

  it('should be a case insensitive search', function() {
    wrapper.find('input[placeholder="Search"]').simulate('change', {target: {value: 'Test'}})
                                               .simulate('keypress', {key: 'Enter'});
    var state = wrapper.props().state.contacts;
    expect(state).toEqual(contacts.slice(0,2));
  });
});

