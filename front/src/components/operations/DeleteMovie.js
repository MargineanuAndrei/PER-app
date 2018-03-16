// Delete movie component
import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from "react-router-dom";

class DeleteMovie extends Component {
  constructor(props){
    super(props);
    this.state = {
      redirect: false
    };
    this.deleteMovie = this.deleteMovie.bind(this);
  }

  // axis request to api to delete a movie
  deleteMovie(){
    const id = this.props.id;
    axios({
      method: 'delete',
      url: `http://localhost:5000/movies/${id}`,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
    .then(() => this.setState({ redirect: true }))
    .catch((error) => {
      console.log(error);
    });
  }

  render() {
    const { redirect } = this.state;
    const { movie } = this.props;

     if (redirect) {
       return <Redirect to='/'/>;
     }
    return (
      <div>
        <h3 className="display-5">{movie.title}</h3>
        <p>Movie Rating: {movie.rating}</p>
        <p>Description: {movie.description}</p>
        <button type="button" className="btn btn-danger" onClick={this.deleteMovie}>Delete</button>
      </div>
    );
  }
}

export default DeleteMovie;
