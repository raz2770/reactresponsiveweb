import React, { Component } from 'react'
import './calender.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'

export default class calender  extends Component {
    date()
    {   var dt = new Date();
       return <li>{dt}</li> ;
        
    }
    render() {
       console.log(this.date());
     return (
        
    <div>
    <div className="wrapper">
      <div className="calendar">
        <div className="month">
               <div className="prev" onclick="moveDate('prev')">
                   <span>&#10094;</span>
               </div>
               <div>
                   <h2 id="month"></h2>
                   <p id="date_str"></p>
               </div>
               <div className="next" onclick="moveDate('next')">
                   <span>&#10095;</span>
               </div>
           </div>
           <div className="weekdays">
               <div>Sun</div>
               <div>Mon</div>
               <div>Tue</div>
               <div>Wed</div>
               <div>Thu</div>
               <div>Fri</div>
               <div>Sat</div>
           </div>
           <div className="days">
           
            
           </div>

      </div>

    </div>
     

    </div>
        )
    }
}
