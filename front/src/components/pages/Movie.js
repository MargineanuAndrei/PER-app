import React, { Component } from 'react';
import axios from 'axios';

import DeleteMovie from "../operations/DeleteMovie";
import UpdateMovie from "../operations/UpdateMovie";

class Movie extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      description: '',
      rating: 1,
      movie: {},
      id: this.props.match.params.id
    };
  }

  getOneMovie(){
    axios.get(`http://localhost:5000/movies/${this.state.id}`)
      .then(response => {
        const movie = response.data.data[0];
        const title = response.data.data[0].title;
        const description = response.data.data[0].description;
        const rating = response.data.data[0].rating;
        this.setState({ title, description, rating, movie});
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentWillMount(){
    this.getOneMovie();
  }

  changeTitle(title){
    this.setState({title});
  }

  changeDescription(description){
    this.setState({description});
  }

  changeRating(rating){
    this.setState({rating});
  }

  render() {
    const { title, description, rating, id, movie} = this.state;
    return (
      <div className="container container-wraper">
        <div className="col-lg-12">
          <div className="row">
            <div className="col-lg-6">
              <DeleteMovie
                movie={movie}
                id={id}/>
            </div>
            <div className="col-lg-6">
              <UpdateMovie
                changeTitle={this.changeTitle.bind(this)}
                changeDescription={this.changeDescription.bind(this)}
                changeRating={this.changeRating.bind(this)}
                title={title}
                description={description}
                rating={rating}
                id={id}
                />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Movie;
