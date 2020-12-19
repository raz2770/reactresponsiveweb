import React, { Component } from 'react';
import './footer.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';

export default class Footer extends Component {
    render() {
        return (
            <div>
                <div className="row foot mt-100">
                    <div className="col-sm-4 ">
                        <div className="footer-sec">
                            <a href="/blog">Blog</a>
                            <a href="/birds">City-API</a>
                            <a href="/time-machine" >Climate Time Machine</a>
                            <a href="/susgoals">Sustainable-goals</a>
                        </div>                  
                    </div>                
                    <div className="col-sm-4 ">
                        <div className="footer-sec">
                        <a href="/temperature-api">Temp-API</a>
                        <a href="/calender">Calender</a>
                        <a href="/no2">No2</a>
                        <a href="/methane">Methane</a>
                        </div>
                    </div>                
                    <div className="col-sm-4 ">
                        <div className="footer-sec">
                        <a href="/Globalcarbonfootprint">GreenHouse Gas Emission</a>
                        <a href="/birds">Birds</a>
                        <a href="/air-api">Air</a>
                        <a href="/susgoals">Sustainable-goals</a>
                        </div>
                    </div>                
                </div>
            </div>
        )
    }
}
