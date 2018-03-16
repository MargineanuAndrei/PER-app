// About page component
import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div className="container about-wraper">
        <h4 className="text-success">Postgresql Expressjs Reactjs CRUD Application</h4>
        <p>This application is a exercise made with pasion, all code is open source you can find it here: <a target="_blank" rel="noopener noreferrer" href="https://github.com/MargineanuAndrei/PER-app">Github</a></p>
        <p>Sorry if I made any mistakes in code. I did not have a lot of time to work on this project.</p>
        <p>Hope you will enjoy my work.</p>
      </div>
    );
  }
}

export default About;
