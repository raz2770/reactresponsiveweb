import React, { Component } from 'react';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.css';
import './wind.css';
import '../../../../node_modules/font-awesome/css/font-awesome.min.css';
import '../../navbar/navbar';
import Navbar from '../../navbar/navbar';

export default class Wind extends Component {
  render() {
    return (
      <div>
        
          <div className="win-top">
            <div className="win-nave">
              <Navbar></Navbar>
            </div>
            <div className="win-frnt-image">
              <img className="win-top-img" src="../wind.jpg"></img>
            </div>
            <div className="win-resr-box">
              <div className="win-write">
                  <h2>Wind Energy</h2>
                  <p>
                  Wind power involves converting wind energy into electricity by using wind turbines. The wind comes from atmospheric changes. These include changes in temperature and pressure which make the air move around the surface of the earth. A wind turbine captures the wind to produce energy.Wind power is a clean energy source that can be relied on for the long-term future. A wind turbine creates reliable, cost-effective, pollution free energy.
                  </p>
                  </div>
            </div>
            </div>

            <div className="win-new-resr-box">
              <div className="win-new-write">
                  <h2>How It Works</h2>
                  <p>
                  Wind energy actually comes from the sun. Solar radiation unevenly heats the surface of earth, which causes hot air to rise and cool air to fill the void. This movement is the definition of wind energy. Wind is a kinetic form of energy (motion).
                  </p>
                  <p>
                  There are several techniques we can use to harness this energy. Wind power is a term used to encapsulate all processes that convert wind energy into useful work.

                  Wind turbines are complicated, but here’s the basic gist: Kinetic energy in the wind is converted into mechanical energy (the rotation of turbine blades), which again is converted into electricity by a generator sitting inside the hub of the structure
                  </p>


                  <h2>What Does It Costs?</h2>
                  <p>
                    <ul>
                      <li>The manufacturing and installation of wind turbines requires heavy upfront investments – both in commercial and residential applications.</li>
                      <li>Wind turbines can be a threat to wildlife (e.g. birds, bats).</li>
                      <li>Noise is regularly reported as a problem by neighboring homes.</li>
                    </ul>
                </p>
                  </div>
            </div>

            <div className="win-rect">
              <div className="row">
                <div className="col-md-3 col-sm-4 win-cl">
                  <div className="win-sqr">
                    <p>Solar</p> 
                  </div>
                </div>
                <div className="col-md-3 col-sm-4 win-cl">
                  <div className="win-sqr">
                  <p>Wind</p> 
                  </div>
                </div>
                <div className="col-md-3 col-sm-4 win-cl">
                  <div className="win-sqr">
                  <p>Hydro</p>  
                  </div>
                </div>
                <div className="col-md-3 col-sm-4 win-cl">
                  <div className="win-sqr">
                  <p>Geothermal</p> 
                  </div>
                </div>
                <div className="col-md-3 col-sm-4 win-cl">
                  <div className="win-sqr">
                  <p>Timbers</p> 
                  </div>
                </div>
                <div className="col-md-3 col-sm-4 win-cl">
                  <div className="win-sqr">
                    <p>Biomass</p>
                  </div>
                </div>
                <div className="col-md-3 col-sm-4 win-cl">
                  <div className="win-sqr">
                  <p>Radiant</p> 
                  </div>
                </div>
                <div className="col-md-3 col-sm-4 win-cl">
                  <div className="win-sqr">
                  <p>Tidal</p> 
                  </div>
                </div>
              </div>
            </div>

        </div> 
     
    )
  }
}
