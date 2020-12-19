import React, { Component } from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import './global-carbon-footprint.css'
import NitrousOxide from './../no2/no2';
import Methane from './../methane/methane';
import Co2emissioninkg from '../co2emissioninkg/co2emissioninkg';

export default class global_carbon_footprint extends Component {
    render() {
        return (
            <div>
                <div className="glob-footprint">
                    <div className="globe"><img src="earth6.png"></img></div>
                    <div className="globe-top">
                        <div className="co2 ems"><div className="co2-box"><Co2emissioninkg></Co2emissioninkg></div></div>
                        <div className="no2 ems"><div className="no2-box"><NitrousOxide></NitrousOxide></div></div>
                        <div className="ch4 ems"><div className="ch4-box"><Methane></Methane></div></div>
                    </div>
                </div>
            </div>
        )
    }
}
