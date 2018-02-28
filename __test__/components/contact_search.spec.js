var React = require('react');
var Enzyme = require('enzyme');
var Adapter = require('enzyme-adapter-react-16');
var ContactSearch = require('../../public/src/components/contact_search');
var helpers = require('../helpers/setup');

Enzyme.configure({ adapter: new Adapter() });

describe('Address Book Component', function() {
  var wrapper;

  beforeEach(function() {
    var store = helpers.store();
    wrapper = Enzyme.mount(<AddressBook state={store.getState()}
                                        store={store}/>);
  });

});

