import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Header from './Header';
import Home from './Home';
import Movie from './Movie';
import About from './About';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Header />
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/movie" component={Movie} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
