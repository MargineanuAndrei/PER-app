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
        this.setState({ movies });
      });
  }

  componentWillMount(){
    this.fetchMovies();
  }

  render() {
    return (
      <div className="container">
        <h3 className="text-success my-header">Available Movies</h3>
          <div className="col-lg-12">
            <div className="row">
            {
            this.state.movies.map(movie => {
              return(
                <div key={movie.id} className="col-lg-4 card-container">
                  <div key={movie.id} className="card border-primary mb-3 card-content">
                    <div className="card-header">
                      {movie.title}
                    </div>
                    <div className="card-body">
                      <p className="card-text">
                        <span className="badge badge-success"><strong>Movie Rating: {movie.rating}</strong></span><br/>
                        {movie.description}
                      </p>
                    </div>
                    <div className="card-footer text-muted button-wraper">
                      <button type="button" className="btn btn-secondary costum-button">Details</button>
                    </div>
                  </div>
                </div>
              );
            })
          }
          </div>
        </div>
      </div>
    );
  }
}

export default Home
