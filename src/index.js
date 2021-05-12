import React from 'react';
import ReactDOM from 'react-dom';


import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import App from './components/App';

const routing = (
  <Router>
    <div>
      <Switch>
        <Route path='/:qr' component={App}/>
        <Route path='/' component={App}/>
      </Switch>
    </div>
  </Router>
)

ReactDOM.render(
  routing,
  document.getElementById('root')
);
