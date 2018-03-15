import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from "react-router-dom";

class Movie extends Component {
  constructor(props){
    super(props);
    this.state = {
      movie: {},
      redirect: false
    };
    this.deleteMovie = this.deleteMovie.bind(this);
  }

  fetchOneMovie(){
    const id = this.props.match.params.id;
    axios.get(`http://localhost:5000/movies/${id}`)
      .then(response => {
        const movie = response.data.data[0];
        this.setState({ movie });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  deleteMovie(){
    const id = this.props.match.params.id;
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

  componentWillMount(){
    this.fetchOneMovie();
  }

  render() {
    const { redirect, movie } = this.state;

     if (redirect) {
       return <Redirect to='/'/>;
     }
    return (
      <div className="container container-wraper">
        <div className="col-lg-12">
          <div className="row">
            <div className="col-lg-6">
              <h3 className="display-5">{movie.title}</h3>
              <p className="lead">{movie.description}</p>
              <button type="button" className="btn btn-danger" onClick={this.deleteMovie}>Delete</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Movie;
