var React = require('react');
var Enzyme = require('enzyme');
var Adapter = require('enzyme-adapter-react-16');
var AddressBook = require('../../public/src/components/address_book.jsx');
var helpers = require('../helpers/setup');

Enzyme.configure({ adapter: new Adapter() });

describe('Address Book Component', function() {
  var wrapper;

  beforeEach(function() {
    var store = helpers.store();
    wrapper = Enzyme.mount(<AddressBook state={store.getState()}
                                        store={store}/>);
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

