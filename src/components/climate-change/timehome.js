import React, { Component } from 'react'
import './timehome.css'
import "../../../node_modules/bootstrap/dist/css/bootstrap.css"
import NitrousOxide from './../no2/no2';


export default class Timehome extends Component {
    render() {
        return (
            <div>
                <div className="time-home-full row">
                   
                    <div className="time-header">
                        <div className="time-header-title time-head-mg">Climate Time Machine</div>
                        <div className="time-header-information time-head-mg">This series of visualizations shows how some of Earth's key climate indicators are changing over time.</div>
                    </div>

                    <div className="time-box row">
                        <div className="col-sm-4 ">
                            <div className="sealevel">
                                <div className="seaimg"><a href="/sealevel"><img src="sealevel.jpg"></img></a></div>
                            </div>
                        </div>

                        <div className="col-sm-4">
                            <div className="coemission">
                                <div className="coimg"><a href="coemission"><img src="co2.jpg"></img></a></div>
                            </div>

                        </div>

                        <div className="col-sm-4 ">
                            <div className="globaltemp">
                                <div className="tempimg"><a href="global-temp"><img src="globaltemp.jpg"></img></a></div>
                            </div>

                        </div>
                        
                    </div>

                </div>
            </div>
        )
    }
}

