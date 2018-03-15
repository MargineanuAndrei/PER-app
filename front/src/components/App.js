import React, { Component } from 'react';
import { BrowserRouter, Route} from "react-router-dom";

import Header from './Header';
import Home from './Home';
import Movie from './Movie';
import About from './About';
import CreateMovie from './CreateMovie';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/movie" component={Movie} />
            <Route path="/create" component={CreateMovie} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
