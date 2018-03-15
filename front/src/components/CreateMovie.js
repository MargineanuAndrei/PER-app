import React, { Component } from 'react';
import axios from 'axios';

class CreateMovie extends Component {

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(){
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
    .then(response => console.log(response))
    .catch((error) => {
      console.log(error);
    });
  }

  render() {
    return (
      <div className="container create-wraper">
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
          <button type="button" className="btn btn-success" onClick={this.onClick}>Create</button>
        </form>
      </div>
    );
  }
}

export default CreateMovie
