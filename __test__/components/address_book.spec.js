var React = require('react');
var Enzyme = require('enzyme');
var Adapter = require('enzyme-adapter-react-16');
var mock = require('redux-mock-store');
var AddressBook = require('../../public/src/components/address_book.jsx');

Enzyme.configure({ adapter: new Adapter() });

var mockStore = mock();

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

describe('Address Book Component', function() {
  beforeEach(function() {
  });

  it('should render self', function() {
    var wrapper = setup().enzymeWrapper;
    expect(wrapper.find('section').hasClass('contact-list')).toBe(true);
  });

  it('should render the ContactSearch component', function() {
  });

  it('should render the ContactList component', function() {
  });

  it('should render the Contact component', function() {
  });
});

