import React, { Component } from 'react';
import BirdAnimation from './../bird-animation/bird-animation';
import './birds.css'
import About from './../about_us/about';

export default class Birds extends Component {
    render() {
        return (
            <div className="bird-rw">
                <div className="bird-heading bird-mg">Have you ever wondered About Your City Health ? </div>
                <a  className="bird-mg" href="/cityapi"><div className="api-button">Let's Get Started</div></a>
              <div className="animation"> <BirdAnimation/> </div>   
            </div>
        )
    }
}
