var React = require('react');
var Enzyme = require('enzyme');
var Adapter = require('enzyme-adapter-react-16');
var AddressBook = require('../../public/src/components/address_book.jsx');
var helpers = require('../helpers/setup');

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  var store = helpers.store();
  var state = store.getState();
  var enzymeWrapper = Enzyme.mount(<AddressBook state={state} store={store}/>);
  return {
    store,
    enzymeWrapper
  };
}

describe('Address Book Component', function() {
  var wrapper, contact;

  beforeEach(function() {
    wrapper = setup().enzymeWrapper;
    contact = helpers.contact;
  });

  // rendering
  it('should render self', function() {
    var sample = wrapper.find('section').hasClass('contact-list');
    expect(sample).toBe(true);
  });

  it('should render the ContactSearch component', function() {
    var sample = wrapper.find('input').props();
    expect(sample).toHaveProperty('placeholder', 'Search');
  });

  it('should render the ContactList component', function() {
    expect(wrapper.find('.contacts')).toBeDefined;
  });

  it('should not render the Contact component by default', function() {
    expect(wrapper.find('span')).toBeUndefined;
  });
});

