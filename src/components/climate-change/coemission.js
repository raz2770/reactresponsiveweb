import React, { Component } from 'react'
import './coemission.css'
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import Co2emission from './../co2emission/co2emission';
export default class coemission extends Component {

    constructor(props) {
        super(props);
        
        this.co_increment= this.co_increment.bind(this)
        this.co_decrement=this.co_decrement.bind(this)
        this.handleAnimation=this.handleAnimation.bind(this)
        this.handleSearch=this.handleSearch.bind(this)
        this.onChangeyear= this.onChangeyear.bind(this)
        this.onSubmit = this.onSubmit.bind(this);
    
        this.state = {
         years:2006,
         co_year_search:'',
         show_animation:false,
         show_option:true,
         show_search:false,
 
        }
      }

      
  onChangeyear(event) {
      
    this.setState({
      co_year_search: event.target.value,   
    
    });
  }

  onSubmit(e){
      e.preventDefault();
  }

  co_increment(e) {
    this.setState({
        co_year: this.state.years++,   
      
      });
  }

  co_decrement(e) 
  {
      this.setState({
          co_year:this.state.years--
      });
  }

  handleAnimation(){
    this.setState({
      show_animation:true,
      show_option:false
    })
  }

  handleSearch(){
    this.setState({
      show_search:true,
      show_option:false
    })
  }


    render() {
        let prev = "co2_" + this.state.co_year_search;
        let ani = "co2_" + this.state.years;
        let jp =".jpg";
        let co_string_ani = ani + jp
        let co_string = prev + jp
        if(this.state.years > 2016){
            this.setState({
                years:2006
            })
        }
        if(this.state.co_year < 2006){
            this.setState({
                years:2006
            })
        }

        return (
            <div>
                <div className="co-emission-full">

{
                  this.state.show_option ?
                  
                  <div className="sea-option">
                    <div className="option-animation opt" onClick={this.handleAnimation}>
                      <div>Animation</div>
                      </div>

                      <div className="option-search opt" onClick={this.handleSearch}>
                       < div> Search</ div>
                        </div>
                    </div>:null
                  }

{ this.state.show_animation ?
                    <div className="co-level-cont">
                <div className="br" >{this.state.years}</div>
                    <div className="co-img-search"><img src={co_string_ani}></img></div>
                    <div className="left-right">
                   <div className="btn" onClick={this.co_decrement}><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-left-square-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm9.5 8.5a.5.5 0 0 0 0-1H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5z"/>
</svg></div>
                    <div className="btn" onClick={this.co_increment}><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-right-square-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm2.5 8.5a.5.5 0 0 1 0-1h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5z"/>
</svg></div>
</div>
        
                </div> : null
    }

                {
                this.state.show_search?
                <div className="cofull">
                   
                    <div className="search-bar">
                        <form className="form-inline d-flex justify-content-center md-form form-sm active-cyan-2 mt-2">
                            <input className="search-input" 
                                type="text" 
                                placeholder="Enter your Destination year from 2006 to 2016" 
                                aria-label="Search"
                                value={this.state.year}
                                onChange={this.onChangeyear}
                                ></input>
                            <i className="fa fa-search search-icon" onClick={this.onSubmit} aria-hidden="true"></i>
                        </form>
                       
                      
                    </div>

                
                        <div className="co-img">
                             <img src={co_string}  onerror="if (this.src != 'notfound.jpg') this.src = 'notfound.jpg';"></img>
                        </div>

                       
                    
                </div>:null
                }

                    <div className="co-footer"><Co2emission></Co2emission></div>
                    </div>
            </div>
        )
    }
}
