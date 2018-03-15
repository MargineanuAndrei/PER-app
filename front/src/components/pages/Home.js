import React, { Component } from 'react';

import GetAllMovies from "../operations/GetAllMovies";

class Home extends Component {
  render() {
    return (
      <div className="container">
        <GetAllMovies />
      </div>
    );
  }
}

export default Home
