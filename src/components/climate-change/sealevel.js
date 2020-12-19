
import React, { Component } from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import Artic from '../sea-level-api/sea-level-api';
import './sealevel.css'

export default class sealevel extends Component {

    
    constructor(props) {
        super(props);
    
        this.increment= this.increment.bind(this)
        this.decrement=this.decrement.bind(this)
        this.handleAnimation=this.handleAnimation.bind(this)
        this.handleSearch=this.handleSearch.bind(this)
        this.onSubmit=this.onSubmit.bind(this)
        this.onChangeyear=this.onChangeyear.bind(this)
    
        this.state = {
         sea_year:2010,
         sea_year_search:'',
         show_animation:false,
         show_option:true,
         show_search:false,
 
        }
      }

      onChangeyear(event) {
      
        this.setState({
          sea_year_search: event.target.value, 
        });
      }
    
      onSubmit(e){
          e.preventDefault();
      }
    


      increment(event) {
      
        this.setState({
          years: this.state.sea_year++
        
        });
      }

      decrement(event) {
      
        this.setState({
          years: this.state.sea_year--
        
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
       
        let prev = "sea_" + this.state.sea_year_search;
        let ani = "sea_" + this.state.sea_year;
        let jp =".jpg";
        let sea_string_ani = ani + jp
        let sea_string = prev + jp
        if(this.state.sea_year > 2020){
            this.setState({
                sea_year:2010
            })
        }
        if(this.state.sea_year < 2010){
            this.setState({
                sea_year:2010
            })
        }
        return (
            <div>
                <div className="sea-level-full">
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
                    <div className="sea-level-cont">
                <div className="br" >{this.state.sea_year}</div>
                    <div className="sea-img-search"><img src={sea_string_ani}></img></div>
                    <div className="left-right">
                   <div className="btn" onClick={this.decrement}><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-left-square-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm9.5 8.5a.5.5 0 0 0 0-1H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5z"/>
</svg></div>
                    <div className="btn" onClick={this.increment}><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-right-square-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm2.5 8.5a.5.5 0 0 1 0-1h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5z"/>
</svg></div>
</div>
        
                </div> : null
    }
    

    {
      this.state.show_search ?
      <div className="cofull">
                   
      <div className="search-bar">
          <form className="form-inline d-flex justify-content-center md-form form-sm active-cyan-2 mt-2">
              <input className="search-input" 
                  type="text" 
                  placeholder="Enter your Destination year from 2010 to 2020" 
                  aria-label="Search"
                  value={this.state.sea_year_search}
                  onChange={this.onChangeyear}
                  ></input>
              <i className="fa fa-search search-icon" onClick={this.onSubmit} aria-hidden="true"></i>
          </form>
         
        
      </div>

  

          <div className="sea-img">
               <img src={sea_string}  onerror="if (this.src != 'notfound.jpg') this.src = 'notfound.jpg';"></img>
          </div>

          
      
  </div>:null
    } 


                <div className="arctic"><Artic></Artic></div>
                </div>
            </div>
        )
    }
}
