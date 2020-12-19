import React, { Component } from 'react';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.css';
import './hydro.css';
import '../../../../node_modules/font-awesome/css/font-awesome.min.css';
import '../../navbar/navbar';
import Navbar from '../../navbar/navbar';

export default class Hydro extends Component {
  render() {
    return (
      <div>
        
          <div className="hyd-top">
            <div className="hyd-nave">
              <Navbar></Navbar>
            </div>
            <div className="hyd-frnt-image">
              <img className="hyd-top-img" src="../hydro.jpg"></img>
            </div>
            <div className="hyd-resr-box">
              <div className="hyd-write">
                  <h2>hyd Energy</h2>
                  <p>
                  Micro hyd systems convert the flow of water into electrical energy. A turbine can be fully immersed in water. The flowing water rotates the turbine’s blades. The amount of energy created depends on the amount of water flowing on the turbine as well as the size of the turbine. Micro hyd systems are generally used as stand alone power systems which are not connected to the grid. They are recommended in remote areas where there is a continuous supply of water.
                  </p>
                  </div>
            </div>
            </div>

            <div className="hyd-new-resr-box">
              <div className="hyd-new-write">
                  <h2>How It Works</h2>
                  <p>
                  hydpower uses the gravitational force of water to turn turbines and generate electricity. The size of the hydelectric plant is directly related to the amount and flow of water. There are three types of hydpower facilities: run-of-the-river (otherwise known as hydkinetic or diversion), impoundment, and pumped storage.
                  </p>
                  <p>
                  Current interest in hydpower has been primarily directed at developing incremental hydpower by using an existing dam. This includes new hydelectric generation capacity achieved by increased efficiency or additions of new capacity at an existing hydpower project. This also includes new electric generation projects that are run-of-the-river projects, particularly at existing non-power dams.

                  A run-of-the-river system diverts a portion of a river's water to a turbine or wheel. Diversion systems can be put in place with an existing dam that does not have a reservoir. For Federal facilities that are located near an existing dam, this type of system may present a predictable, cost-effective renewable electricity option.

                  Pumped storage is a method of keeping water in reserve for peak period power demands by pumping water that has already flowed through the turbines back up to a storage pool at a time of low customer demand for energy. The reservoir stores power in the form of water when demands are low and produces maximum power during daily peak periods. This can be very cost effective with time-of-use electricity rates or in conjunction with other intermittent renewable energy resources.
                  </p>

                  <h2>What Does It Costs?</h2>
                  <p>
                    <ul>
                      <li>The environmental consequences of hydpower are related to interventions in nature due to damming of water, changed water flow and the construction of roads and power lines.</li>
                      <li>hydelectric power plants may affect fish is a complex interaction between numerous physical and biological factors.</li>
                      <li>Building power plants in general is expensive. hydelectric power plants are not an exception to this. On the other hand, these plants do not require a lot of workers and maintenance costs are usually low.</li>
                      <li>Electricity generation and energy prices are directly related to how much water is available. A drought could potentially affect this.</li>
                      
                    </ul>
                  </p>
                  </div>
            </div>

            <div className="hyd-rect">
              <div className="row">
                <div className="col-md-3 col-sm-4 hyd-cl">
                  <div className="hyd-sqr">
                    <p>Solar</p> 
                  </div>
                </div>
                <div className="col-md-3 col-sm-4 hyd-cl">
                  <div className="hyd-sqr">
                  <p>Wind</p> 
                  </div>
                </div>
                <div className="col-md-3 col-sm-4 hyd-cl">
                  <div className="hyd-sqr">
                  <p>hyd</p>  
                  </div>
                </div>
                <div className="col-md-3 col-sm-4 hyd-cl">
                  <div className="hyd-sqr">
                  <p>hydthermal</p> 
                  </div>
                </div>
                <div className="col-md-3 col-sm-4 hyd-cl">
                  <div className="hyd-sqr">
                  <p>Timbers</p> 
                  </div>
                </div>
                <div className="col-md-3 col-sm-4 hyd-cl">
                  <div className="hyd-sqr">
                    <p>Biomass</p>
                  </div>
                </div>
                <div className="col-md-3 col-sm-4 hyd-cl">
                  <div className="hyd-sqr">
                  <p>Radiant</p> 
                  </div>
                </div>
                <div className="col-md-3 col-sm-4 hyd-cl">
                  <div className="hyd-sqr">
                  <p>Tidal</p> 
                  </div>
                </div>
              </div>
            </div>

         

</div>        
    )
  }
}
