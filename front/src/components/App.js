import React, { Component } from 'react';
import { BrowserRouter, Route} from "react-router-dom";

import Header from './Header';
import Home from './pages/Home';
import Movie from './pages/Movie';
import About from './pages/About';
import CreateMovie from './operations/CreateMovie';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/movie/:id" component={Movie} />
            <Route path="/create" component={CreateMovie} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
