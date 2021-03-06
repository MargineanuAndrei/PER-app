// Create movie component
import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from "react-router-dom";

class CreateMovie extends Component {

  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      warning: false
    };
    this.createMovie = this.createMovie.bind(this);
    this.validateData = this.validateData.bind(this);
  }

  // Very simple validation function
  validateData(){
    if(this.refs.title.value.length < 2 || this.refs.title.value.length > 50){
      alert('Title field is invalid!');
      return false;
    }
    if(this.refs.description.value.length < 2 || this.refs.description.value.length > 300){
      alert('Description field is invalid!');
      return false;
    }
    return true;
  }

  // axis request to api to create a movie
  createMovie(){
    if(this.validateData()){
      axios({
        method: 'post',
        url: 'http://localhost:5000/movies',
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
  }

  render() {
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to='/'/>;
    }
    return (
      <div className="container container-wraper">
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
              <small id="descriptionTextarea" className="form-text text-muted">Min length 2 max length 300</small>
            </div>
          </fieldset>
          <button type="button" className="btn btn-success" onClick={this.createMovie}>Create</button>
        </form>
      </div>
    );
  }
}

export default CreateMovie
