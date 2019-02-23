import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Teams from './Teams';
import Players from './Players';
import Navbar from './Nav';
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/teams" component={Teams} />
            <Route exact path="/players" component={Players} />
            <Route
              render={() => (
                <img
                  src="https://media.giphy.com/media/NTXqH1bUCfHBS/giphy.gif"
                  className="Page404"
                />
              )}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
