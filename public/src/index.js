var React = require('react');
var ReactDOM = require('react-dom');
var redux = require('redux');
var reactRedux = require('react-redux');
var addressBookApp = require('./reducers/address_book');
var AddressBook = require('./components/address_book');
var Provider = reactRedux.Provider;

const store = redux.createStore(addressBookApp);

const render = function() {
  ReactDOM.render(
    <Provider store={store}>
      <AddressBook/>
    </Provider>,
    document.getElementById('container')
  )
};

render();
store.subscribe(render);
