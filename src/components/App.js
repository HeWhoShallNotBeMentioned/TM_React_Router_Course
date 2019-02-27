import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Teams from './Teams';
import Players from './Players';
import Navbar from './Nav';
import TeamPage from './TeamPage';
import Articles from './Articles';
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/players" component={Players} />
            <Route path="/teams" component={Teams} />
            <Route path="/:teamId" exact component={TeamPage} />
            <Route path="/:teamId/articles" component={Articles} />
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
