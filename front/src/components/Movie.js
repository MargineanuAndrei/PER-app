import React, { Component } from 'react';
import axios from 'axios';

class Movie extends Component {
  constructor(props){
    super(props);
    this.state = {
      movie: {}
    };
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

  componentWillMount(){
    this.fetchOneMovie();
  }

  render() {
    return (
      <div className="container container-wraper">
        <div className="col-lg-12">
          <div className="row">
            <div className="col-lg-6">
              <h3 className="display-5">{this.state.movie.title}</h3>
              <p className="lead">{this.state.movie.description}</p>
              <button type="button" className="btn btn-danger">Delete</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Movie;
