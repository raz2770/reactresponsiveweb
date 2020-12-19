import React, { Component } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import './resources.css';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';
import {Route,Switch} from 'react-router-dom';
import '../renewable/solar/solar.js';
import  Solar  from '../renewable/solar/solar';



export default class Resources extends Component {
    
  render() {
    return (
      <div className="res-row">
        
        <div className="res ">
          <div className="row renewable rw">
            <div className="col-sm-12 contr">renewable resouces</div>
            <div className="col-md-3  col-sm-4 resr">
              <div className="rw-names">
                <a href="/Solar"><img className="rw-img"src="./env10.jpeg" alt="#"></img></a>
              </div>
            </div>
            <div className="col-md-3 col-sm-4 resr">
              <div className="rw-names">
                <a href="/wind"><img className="rw-img"src="./env11.jpeg" alt="#"></img></a>
              </div>
            </div>
            <div className="col-md-3  col-sm-4 resr">
              <div className="rw-names">
                <a href="/hydro"><img className="rw-img"src="./env14.jpg" alt="#"></img></a>
              </div>
            </div>
            <div className="col-md-3 col-sm-4 resr">
              <div className="rw-names">
              <a href="/geothermal"><img className="rw-img"src="./env15.jpg" alt="#"></img></a>
              </div>
            </div>
          
          </div>

          <div className="row non-renewable rw">
            <div className="col-sm-12 contr">non-renewable resouces</div>
            <div className="col-md-3  col-sm-4 resr">
              <div className="rw-names">
              <img className="rw-img"src="./env17.jpg" alt="#"></img>
              </div>
            </div>
            <div className="col-md-3  col-sm-4 resr">
              <div className="rw-names">
              <img className="rw-img"src="./env19.jpg" alt="#"></img>
              </div>
            </div>
            <div className="col-md-3 col-sm-4 resr">
              <div className="rw-names">
              <img className="rw-img"src="./env20.jpg" alt="#"></img>
              </div>
            </div>

            <div className="col-md-3 col-sm-4  resr">
              <div className="rw-names">
              <img className="rw-img"src="./env29.jpg" alt="#"></img>
              </div>
            </div>
          </div>

        </div>
               
   
      </div>

     
    )
  }
}
