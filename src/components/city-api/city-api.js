import React, { Component } from 'react'
import './city-api.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';
import Airquality from './../airquality/Airquality';


export default class Cityapi extends Component {

    constructor(props) {
        super(props);

        this.onChangecityname = this.onChangecityname.bind(this);
        this.handlesearch= this.handlesearch.bind(this);

        this.state = {
         name:'',
         formSubmit:false
        }
        
     
    }

    onChangecityname(e) {
        this.setState({
            name: e.target.value
        });
    }

    handlesearch(e) {
        e.preventDefault();
        this.setState({formSubmit: true})
        
    }

 


    render() {

    
        return (
            <div>
               
                <div className="city-api-row">
                    <div className="search-bar">
                        <form className="form-inline d-flex justify-content-center md-form form-sm active-cyan-2 mt-2">
                            <input className="search-input" 
                                type="text" 
                                placeholder="Enter your City" 
                                aria-label="Search"
                                value={this.state.name}
                                onChange={this.onChangecityname}
                                ></input>
                            <i className="fa fa-search search-icon" onClick={this.handlesearch} aria-hidden="true"></i>
                        </form>
                        {this.state.formSubmit && <Airquality search={this.state.name} />}
                    </div>
                </div>
            </div>
        )
    }
}
