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
    const { title, description, rating } = this.props;

     if (redirect) {
       return <Redirect to='/'/>;
     }
    return (
      <div>
        <h3 className="display-5">{title}</h3>
        <p>Movie Rating: {rating}</p>
        <p>Description: {description}</p>
        <button type="button" className="btn btn-danger" onClick={this.deleteMovie}>Delete</button>
      </div>
    );
  }
}

export default DeleteMovie;
