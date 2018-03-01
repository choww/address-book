var React = require('react');
var reactRedux = require('react-redux');
var router = require('react-router-dom');
var ContactList = require('../containers/contact_list');
var ContactProfile = require('../containers/contact_profile');
var Router = router.BrowserRouter;
var Route = router.Route;
var Switch = router.Switch;
var Provider = reactRedux.Provider;

var Root = function({store}) {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/contacts/:id" component={ContactList}/>
          <Route path="/" component={ContactList}/>
        </Switch>
      </Router>
    </Provider>
  )
};

module.exports = Root;
