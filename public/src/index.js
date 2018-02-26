var React = require('react');
var ReactDOM = require('react-dom');
var redux = require('redux');
var addressBookApp = require('./reducers/address_book');
var AddressBook = require('./components/address_book.jsx');

const store = redux.createStore(addressBookApp);

const render = function() {
  ReactDOM.render(
    <AddressBook state={store.getState()} store={store}/>,
    document.getElementById('container')
  )
};

render();
store.subscribe(render);
