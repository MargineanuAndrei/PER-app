import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from "react-router-dom";

class UpdateMovie extends Component {
  constructor(props){
    super(props);
    this.state = {
      redirect: false
    };
    this.updateMovie = this.updateMovie.bind(this);
  }

  updateMovie(){
    const {id} = this.props;
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

  handleTitleChange (e) {
    const title = e.target.value;
    this.props.changeTitle(title);
  }

  handleDescriptionChange (e) {
    const description = e.target.value;
    this.props.changeDescription(description);
  }

  handleRatingChange(e){
    const rating = e.target.value;
    this.props.changeRating(rating);
  }

  render() {
    const { redirect } = this.state;
    const { title, description, rating } = this.props;

     if (redirect) {
       return <Redirect to='/'/>;
     }
    return (
      <div>
        <form>
          <fieldset>
            <div className="form-group">
            <label htmlFor="titleInput">Movie Title</label>
            <input value={title} onChange={this.handleTitleChange.bind(this)} ref="title" type="text" className="form-control" id="titleInput" aria-describedby="titleInput" placeholder="Enter title"></input>
            <small id="titleInput" className="form-text text-muted">Min length 2 max length 50</small>
            </div>

            <div className="form-group">
              <label htmlFor="ratingSelect">Select Movie Rating</label>
              <select value={rating} onChange={this.handleRatingChange.bind(this)} ref="rating" className="form-control" id="ratingSelect">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="descriptionTextarea">Movie Description</label>
              <textarea value={description} onChange={this.handleDescriptionChange.bind(this)} ref="description" className="form-control" id="descriptionTextarea" aria-describedby="descriptionTextarea" rows="3"></textarea>
              <small id="descriptionTextarea" className="form-text text-muted">Min length 2 max length 150</small>
            </div>
          </fieldset>
          <button type="button" className="btn btn-primary" onClick={this.updateMovie}>Update</button>
        </form>
      </div>
    );
  }
}

export default UpdateMovie;
