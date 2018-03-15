import React, { Component } from 'react';
import axios from 'axios';

class Home extends Component {

  conponetDidMount(){
    axios.get('http://localhost:5000/movies')
      .then(response => console.log(response));
  }

  render() {
    return (
      <div>
        Home sweet home
      </div>
    );
  }
}

export default Home;
