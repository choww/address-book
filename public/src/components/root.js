var React = require('react');
var reactRedux = require('react-redux');
var router = require('react-router-dom');
var ContactList = require('../containers/contact_list');
var ContactProfile = require('../containers/contact_profile');
var Router = router.BrowserRouter;
var Route = router.Route;
var Provider = reactRedux.Provider;

var Root = function({store}) {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Route path="/" component={ContactList}/>
          <Route path="/contacts/:id" component={ContactProfile}/>
        </div>
      </Router>
    </Provider>
  )
};

module.exports = Root;
