import React, { Component } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import './navbar.css';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';

export default class Navbar extends Component {

  constructor () {
    super()
    this.state={
      showMe:false,
      showx:false,
      showham:true
    }
  }

  operation()
  {
    this.setState({
      showMe:!this.state.showMe,
      showx:true,
      showham:false
      
    })

  }

  operate(){
    this.setState({
      showMe:!this.state.showMe,
      showx:false,
      showham:true

    })
  }
    
  render() {
    return (
      <div>
          <div className="row header">  
          
            <div className="hamb">

              {

                this.state.showham?
                  <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-list-ul hamburger" onClick={()=>this.operation()}fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path className="rw"fill-rule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                </svg>
                :null

              }

              {
                this.state.showx?
                  <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-x closex" onClick={()=>this.operate()}
                  fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"/>
                    <path fill-rule="evenodd" d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"/>
                  </svg>
                :null

              }

              
            </div>

            <div className=" left">
                <p>IIT TIRUPATI</p>
            </div>
            
        </div>

        {

          this.state.showMe?
            <div className="dropdown">
                 <div className="row header">  
          
          <div className="hamb">

            {

              this.state.showham?
                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-list-ul hamburger" onClick={()=>this.operation()}fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path className="rw"fill-rule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
              </svg>
              :null

            }

            {
              this.state.showx?
                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-x close" onClick={()=>this.operate()}
                fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"/>
                  <path fill-rule="evenodd" d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"/>
                </svg>
              :null

            }

            
          </div>

          <div className=" left">
              <p>IIT TIRUPATI</p>
          </div>
          
      </div>
              <div className="drop link">
                <div className="rule"></div>
                <a>Home</a>
                <div className="rule"></div>
                <a>About us</a>
                <div className="rule"></div>
                <a>contact us</a>
                <div className="rule"></div>
                <a>Help</a>
                <div className="rule"></div>
              </div>
              <div className=" drop btm">
                <div className="txt bt">join the conversation</div>
                <div className="icons  bt container">
                  <i class="fa fa-github icon" aria-hidden="true"></i>
                  <i class="fa fa-youtube icon" aria-hidden="true"></i>
                  <i class="fa fa-facebook-square icon" aria-hidden="true"></i>
                  <i class="fa fa-instagram icon" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          :null
        
        }
   
      </div>

     
    )
  }
}
