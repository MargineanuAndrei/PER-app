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
    this.updateMovie = this.updateMovie.bind(this);
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

  updateMovie(){
    const id = this.props.match.params.id;
    axios({
      method: 'put',
      url: `http://localhost:5000/movies/${id}`,
      data: {
        title: this.refs.title.value,
        description: this.refs.description.value,
        rating: parseInt(this.refs.rating.value, 10)
      },
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
            <div className="col-lg-6">
            <form>
              <fieldset>
                <div className="form-group">
                <label htmlFor="titleInput">Movie Title</label>
                <input ref="title" type="text" className="form-control" id="titleInput" aria-describedby="titleInput" placeholder="Enter title"></input>
                <small id="titleInput" className="form-text text-muted">Min length 2 max length 50</small>
                </div>

                <div className="form-group">
                  <label htmlFor="ratingSelect">Select Movie Rating</label>
                  <select ref="rating" className="form-control" id="ratingSelect">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="descriptionTextarea">Movie Description</label>
                  <textarea ref="description" className="form-control" id="descriptionTextarea" aria-describedby="descriptionTextarea" rows="3"></textarea>
                  <small id="descriptionTextarea" className="form-text text-muted">Min length 2 max length 150</small>
                </div>
              </fieldset>
              <button type="button" className="btn btn-primary" onClick={this.updateMovie}>Update</button>
            </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Movie;
