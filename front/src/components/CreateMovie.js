import React, { Component } from 'react';
import axios from 'axios';

class CreateMovie extends Component {

  onSubmit(){
    axios.post('http://localhost:5000/movies')
      .then(response => console.log(response));
  }

  render() {
    return (
      <div className="container create-wraper">
        <form>
          <fieldset>

            <div className="form-group">
            <label for="titleInput">Movie Title</label>
            <input type="text" className="form-control" id="titleInput" aria-describedby="titleInput" placeholder="Enter title"></input>
            <small id="titleInput" className="form-text text-muted">Min length 2 max length 50</small>
            </div>

            <div className="form-group">
              <label for="ratingSelect">Select Movie Rating</label>
              <select className="form-control" id="ratingSelect">
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
              <label for="descriptionTextarea">Movie Description</label>
              <textarea className="form-control" id="descriptionTextarea" aria-describedby="descriptionTextarea" rows="3"></textarea>
              <small id="descriptionTextarea" className="form-text text-muted">Min length 2 max length 150</small>
            </div>
          </fieldset>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

export default CreateMovie
