import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import Header from './Header';
import Main from './Main';

require('../scss/app.scss');

class App extends React.Component {
  render() {
    return (
      <Router>
          <div className="container">
              <Header />
              <Route exact path="/" component={Main}/>
          </div>
      </Router>
    )
  }
}

export default App;
