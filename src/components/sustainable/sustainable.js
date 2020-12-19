import React, { Component } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import './sustainable.css';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';
import '../navbar/navbar';
import Navbar from '../navbar/navbar';


export default class Sustainable extends Component {

    
  render() {
    return (
      <div className="sus-row">

       
        <div class="row upr">
          <img className="img4" src="/front.png" alt="#"></img>
        </div>

        <div className="navi">
        <Navbar></Navbar>
        
        </div>
        <div className="container-fluid whole">
        
          <div className="row cont">
            <div className="col-md-6 col-sm-12 lfts">
              <div className="lft-rw row">
                <img src="/env4.jpeg" className="image1" alt="#"></img>
                <div className="con">
                The planet's average surface temperature has risen about 2.05 degrees Fahrenheit (1.14 degrees Celsius) since the late 19th century, a change driven largely by increased carbon dioxide and other human-made emissions into the atmosphere.
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 rghts">
              <div className="row rght-rw">
                <img src="/env2.jpg" className="image" alt="#"></img>
                <div className="con2">
                Since the beginning of the Industrial Revolution, the acidity of surface ocean waters has increased by about 30%.13,14 This increase is the result of humans emitting more carbon dioxide into the atmosphere.
                </div>
              </div>
              <div className="row rght-rw">
                <img src="/env3.jpg" className="image" alt="#"></img>
                <div className="con3">
                Both direct and indirect pollution affect wildlife. Specific statistics for indirect pollution are more difficult to pinpoint. Indirect pollution threatens the habitat of animals.  
                </div>
              </div>
            </div>
          </div>

        </div>          
   
      </div>

     
    )
  }
}
