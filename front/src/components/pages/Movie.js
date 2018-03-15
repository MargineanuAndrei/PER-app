import React, { Component } from 'react';
import axios from 'axios';

import DeleteMovie from "../operations/DeleteMovie";
import UpdateMovie from "../operations/UpdateMovie";

class Movie extends Component {
  constructor(props){
    super(props);
    this.state = {
      movie: {},
      id: this.props.match.params.id
    };
  }

  getOneMovie(){
    axios.get(`http://localhost:5000/movies/${this.state.id}`)
      .then(response => {
        const movie = response.data.data[0];
        this.setState({ movie });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentWillMount(){
    this.getOneMovie();
  }

  render() {
    const { movie, id} = this.state;
    return (
      <div className="container container-wraper">
        <div className="col-lg-12">
          <div className="row">
            <div className="col-lg-6">
              <DeleteMovie movie={movie} id={id}/>
            </div>
            <div className="col-lg-6">
              <UpdateMovie movie={movie} id={id}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Movie;
