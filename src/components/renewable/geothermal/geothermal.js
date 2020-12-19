import React, { Component } from 'react';
import { loremIpsum } from "lorem-ipsum";
import '../../../../node_modules/bootstrap/dist/css/bootstrap.css';
import './geothermal.css';
import '../../../../node_modules/font-awesome/css/font-awesome.min.css';
import '../../navbar/navbar';
import Navbar from '../../navbar/navbar';

export default class Geothermal extends Component {
  render() {
    return (
      <div>
        
          <div className="geo-top">
            <div className="geo-nave">
              <Navbar></Navbar>
            </div>
            <div className="geo-frnt-image">
              <img className="geo-top-img" src="../geothermal.png"></img>
            </div>
            <div className="geo-resr-box">
              <div className="geo-write">
                  <h2>Geothermal Energy</h2>
                  <p>
                  The word Geothermal is derived from the Greek term “Geo”, meaning Earth, and “Thermal” meaning heat.Geothermal energy is the thermal energy generated and stored in the Earth.
                  The geothermal energy of the Earth's crust originates from the original formation of the planet and from radioactive decay of materials.
                  Geothermal power is considered to be renewable because any projected heat extraction is small compared to the Earth's heat content. 
                  </p>
                  </div>
            </div>
            </div>

            <div className="geo-new-resr-box">
              <div className="geo-new-write">
                  <h2>How It Works</h2>
                  <p>
                  There are three types of geothermal power plants: dry steam, flash, and binary. Dry steam, the oldest geothermal technology, takes steam out of fractures in the ground and uses it to directly drive a turbine. Flash plants pull deep, high-pressure hot water into cooler, low-pressure water. The steam that results from this process is used to drive the turbine. In binary plants, the hot water is passed by a secondary fluid with a much lower boiling point than water. This causes the secondary fluid to turn to vapor, which then drives a turbine. Most geothermal power plants in the future will be binary plants.
                  </p>
                  <p>
                  Geothermal power plants are compact; using less land per GWh (404 m2) than coal (3642 m2) wind (1335 m2) or solar PV with center station (3237 m2).*
                  Modern closed-loop geothermal power plants emit no greenhouse gasses; life cycle GHG emissions (50 g CO2 eq/kWhe) are four times less than solar PV, and six to 20 times lower than natural gas. Geothermal power plants consume less water on average over the lifetime energy output than the most conventional generation technologies.**
                  A geothermal heat pump system can take advantage of the constant temperature of the upper ten feet (three meters) of the Earth’s surface to heat a home in the winter, while extracting heat from the building and transferring it back to the relatively cooler ground in the summer.
                  </p>

                  <h2>What Does It Costs?</h2>
                  <p>
                    <ul>
                      <li>There are heavy upfront costs associated with both geothermal power plants and geothermal heating/cooling systems.</li>
                      <li>There are some minor environmental issues associated with geothermal power.</li>
                      <li>Geothermal power plants can in extreme cases cause earthquakes.</li>
                      <li>In case of geothermal systems, having a piece of land next to the house is required in order to be able to install one. That makes geothermal systems hard to be implemented for homeowners in big cities, unless a vertical ground source heat pump is used.</li>
                      
                    </ul>
                  </p>
                  </div>
            </div>

            <div className="geo-rect">
              <div className="row">
                <div className="col-md-3 col-sm-4 geo-cl">
                  <div className="geo-sqr">
                    <p>Solar</p> 
                  </div>
                </div>
                <div className="col-md-3 col-sm-4 geo-cl">
                  <div className="geo-sqr">
                  <p>Wind</p> 
                  </div>
                </div>
                <div className="col-md-3 col-sm-4 geo-cl">
                  <div className="geo-sqr">
                  <p>Hydro</p>  
                  </div>
                </div>
                <div className="col-md-3 col-sm-4 geo-cl">
                  <div className="geo-sqr">
                  <p>Geothermal</p> 
                  </div>
                </div>
                <div className="col-md-3 col-sm-4 geo-cl">
                  <div className="geo-sqr">
                  <p>Timbers</p> 
                  </div>
                </div>
                <div className="col-md-3 col-sm-4 geo-cl">
                  <div className="geo-sqr">
                    <p>Biomass</p>
                  </div>
                </div>
                <div className="col-md-3 col-sm-4 geo-cl">
                  <div className="geo-sqr">
                  <p>Radiant</p> 
                  </div>
                </div>
                <div className="col-md-3 col-sm-4 geo-cl">
                  <div className="geo-sqr">
                  <p>Tidal</p> 
                  </div>
                </div>
              </div>
            </div>

         

</div>        
    )
  }
}
