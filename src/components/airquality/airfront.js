import React, { Component } from 'react';
import Airquality from './Airquality.js';
import './airfront.css'
const dotenv = require('dotenv').config();
class Airfront extends Component {
    constructor(props) {
      super(props);
      this.state = { name: "" ,formSubmit: false};
      this.handleInput = this.handleInput.bind(this);
      this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }   
  
    handleInput (event) {
      console.log(event.target.value)
      this.setState({
        name: event.target.value,
      });
    }
  
    handleFormSubmit (event) {
      event.preventDefault()
      console.log(this.state.name)
      this.setState({formSubmit: true})
    }
    
    render () {
      return (
        <div className="Air-cont">
          <h1>
              Enter the name of the city: <br/>
          </h1>
          <form onSubmit={this.handleFormSubmit}>
            <label>
              Enter the city name:{" "}
              <input
                type="text"
                onChange = {this.handleInput}
              />
              <button onClick = {this.handleFormSubmit}>Enter</button>  
                
            </label>
            
          </form>
          {this.state.formSubmit && <Airquality search={this.state.name} />}
        </div>
      );
    }
  }

export default Airfront;