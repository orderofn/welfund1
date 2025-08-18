import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout  from './views/Layout/Layout';

class App extends Component {
  render() {
    return (
        <Switch>
          <Route path="/" name="Home" component={Layout} />
        </Switch>
    );
  }
}
export default App;
