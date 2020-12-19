import './temp-api.css';
import React from 'react';
import Temperature from './temp-api.js';

class Temperature_api extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            name : "",formSubmit : false
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleInput(event){
        console.log(event.target.value);
        this.setState({name : event.target.value,formSubmit : false});        
    }

    handleFormSubmit(event){
        event.preventDefault();
        console.log(this.state.name);
        this.setState({formSubmit : true});
    }

    render(){
        return(
            <div className = "App">
               <h1>
                   <form onSubmit = {this.handleFormSubmit}>
                        <label>
                            Enter the city name:{" "}
                            <input
                                type="text"
                                onChange = {this.handleInput}
                            />
                            <button onClick = {this.handleFormSubmit}>Enter</button>  
                        </label>
                    </form>
                    {this.state.formSubmit && <Temperature name = {this.state.name}/>}
               </h1>
            </div>
        );
    }
}

export default Temperature_api;