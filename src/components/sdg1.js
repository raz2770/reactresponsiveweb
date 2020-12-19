import React, { Component } from 'react';
import './sdg1.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';

class Sdg1 extends Component {
    
    render() { 
        return ( 
            <React.Fragment>

                <div className="container-fluid wrapper-1">
                    <div className="row wrap-1">

                    <div className="col-md-12 goal-head-1">
                            <div className="separator-goals-1"></div>
                            <p className="heading-1">Goal 1:No poverty</p>
                            <div className="separator-goals-1"></div>
                        </div>

                        <div className="separator-goals"></div>
                        <div className="col-md-4 img-1"><img src="imagesP/np-1.jpe" width="250px" height="250px"  className="pic-round-1 .img1-1"></img></div>
                        <div className="col-md-4 img-1"><img src="imagesP/np-2.jpe"  width="250px" height="250px" className="pic-round-1 .img1-1"></img></div>
                        <div className="col-md-4 img-1"><img src="imagesP/np-3.png"  width="250px" height="250px" className="pic-round-1 .img1-1"></img></div>
                        <div className="separator-goals"></div>

                        <div className="col-md-12 goal-body-1">
                        <div className="separator-goals-1"></div>
                        <div className="content-1">
                        <p>By 2030, eradicate extreme poverty for all people everywhere.</p>
                        <div className="separator-goals-1"></div>
                        <p>By 2030, reduce at least by half the proportion of men, women and 
                            children of all ages living in poverty in all its dimensions 
                            according to national definitions</p>
                        <div className="separator-goals-1"></div>
                        <p>Implement nationally appropriate social protection systems and 
                            measures for all, including floors, and by 2030 achieve substantial 
                            coverage of the poor and the vulnerable</p>
                        <div className="separator-goals-1"></div>
                        <p> By 2030, ensure that all men and women, in particular the poor
                             and the vulnerable, have equal rights to economic resources, 
                             as well as access to essential services, ownership and control 
                             over land and other forms of property, inheritance, natural 
                             resources, appropriate new technology and financial services, 
                             including microfinance</p>
                        <div className="separator-goals-1"></div>
                        <p>By 2030, build the resilience of the poor and those in vulnerable 
                            situations and reduce their exposure and vulnerability to climate-related
                             extreme events and other economic, social and environmental shocks and 
                             disasters</p>
                        <div className="separator-goals-1"></div>
                        <p>Ensure significant mobilization of resources from a variety of sources,
                             including through enhanced development cooperation, to provide adequate
                              and predictable means for developing countries, in particular, least 
                              developed countries, to implement programmes and policies to end poverty 
                              in all its dimensions</p>
                        <div className="separator-goals-1"></div>
                        <p>Create sound policy frameworks at the national, regional and international 
                            levels, based on pro-poor and gender-sensitive development strategies, 
                            to support accelerated investment in poverty eradication actions</p>
                        <div className="separator-goals-1"></div>
                        
                        </div>
                        </div>

                        <div className="separator-goals-1"></div>
                        <div className="col-md-4 img-1"><img src="imagesP/np-4.jpe" width="250px" height="250px" className="pic-round-1 .img1-1"></img></div>
                        <div className="col-md-4 img-1"><img src="imagesP/np-5.jpe"  width="250px" height="250px" className="pic-round-1 .img1-1"></img></div>
                        <div className="col-md-4 img-1"><img src="imagesP/np-6.jpe"  width="250px" height="250px" className="pic-round-1 .img1-1"></img></div>
                        <div className="separator-goals-1"></div>
                    </div>
                </div>

            </React.Fragment>
         );
    }
}
 
export default Sdg1;