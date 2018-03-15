import React, { Component } from 'react';
import axios from 'axios';

class Home extends Component {

  constructor(props){
    super(props);
    this.state = {
      movies: []
    };
  }

  fetchMovies(){
    axios.get('http://localhost:5000/movies')
      .then(response => {
        const movies = response.data.data;
        console.log(movies);
        this.setState({ movies });
      });
  }

  componentWillMount(){
    this.fetchMovies();
  }

  render() {
    return (
      <div>
        <h2>Home sweet home</h2>

        {
            this.state.movies.map(movie => {
              return(
                <div key={movie.id}>
                  <div>{movie.title}</div>
                </div>
              );
            })
        }

      </div>
    );
  }
}

export default Home
