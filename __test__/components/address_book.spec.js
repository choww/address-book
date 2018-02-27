var React = require('react');
var Enzyme = require('enzyme');
var Adapter = require('enzyme-adapter-react-16');
var reduxMock = require('redux-mock-store');
var AddressBook = require('../../public/src/components/address_book.jsx');

Enzyme.configure({ adapter: new Adapter() });

var mockStore = reduxMock();

function setup() {
  var store = mockStore({
    contacts: [],
    contact: {},
    search: '',
    contactLoaded: false,
    editMode: false,
    currentlyEditing: {}
  });
  var state = store.getState();
  var enzymeWrapper = Enzyme.mount(<AddressBook state={state} store={store}/>);
  return {
    store,
    enzymeWrapper
  };
}

var wrapper;

describe('Address Book Component', function() {
  beforeEach(function() {
    wrapper = setup().enzymeWrapper;
  });

  // rendering
  it('should render self', function() {
    expect(wrapper.find('section').hasClass('contact-list')).toBe(true);
  });

  it('should render the ContactSearch component', function() {
    expect(wrapper.find('input').props()).toHaveProperty('placeholder', 'Search');
  });

  it('should render the ContactList component', function() {
    expect(wrapper.find('.contacts')).toBeDefined;
  });

  it('should not render the Contact component by default', function() {
    expect(wrapper.find('span')).toBeUndefined;
  });

  // action dispatching
});

