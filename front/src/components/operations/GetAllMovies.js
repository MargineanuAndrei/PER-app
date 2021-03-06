// Get all movies component
import React, { Component } from 'react';
import axios from 'axios';

import { Link } from "react-router-dom";

class GetAllMovies extends Component {

  constructor(props){
    super(props);
    this.state = {
      movies: []
    };
  }

  // axis request to api to get all movies
  getAllMovies(){
    axios.get('http://localhost:5000/movies')
      .then(response => {
        const movies = response.data.data;
        this.setState({ movies });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentWillMount(){
    this.getAllMovies();
  }

  render() {
    return (
      <div>
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
                      <Link to={`/movie/${movie.id}`}  className="link-button"><button type="button" className="btn btn-secondary custom-button">Details</button></Link>
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

export default GetAllMovies
