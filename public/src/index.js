var React = require('react');
var ReactDOM = require('react-dom');
var redux = require('redux');
var addressBookApp = require('./reducers/address_book');
var Root = require('./components/root');

const store = redux.createStore(addressBookApp);

const render = function() {
  ReactDOM.render(
    <Root store={store}/>,
    document.getElementById('container')
  )
};

render();
store.subscribe(render);
