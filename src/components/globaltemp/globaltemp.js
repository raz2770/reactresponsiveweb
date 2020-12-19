import React from 'react';
import './globaltemp.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'

class Globaltemp extends React.Component{
    
    state = {
        conc : [],
        info : {}
    }

    componentDidMount(){
        
        fetch("https://global-warming.org/api/temperature-api")
        .then(res => res.json())
        .then((data) => {
            const newConc = data.result;
            const newInfo = newConc[newConc.length-1];
            const newState = Object.assign({},this.state,{
                conc : newConc,
                info : newInfo
            });
            this.setState(newState);
            console.log(this.state.info);
        })
        .catch(error => console.log(error));
    }

    render(){
        let val= this.state.info.land;
        return(
            <div className = "global-temp-footer row">
                <div className="global-content">
                    <div className="footer-global"><h1>The Global temperature </h1> </div>
                    <div className="symbols">
                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-up-short" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path className="arw" fill-rule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"/>
                    </svg>
                    <span> {1.8*val}</span>
                    <div className="small"><span>°F Since 1880</span></div>
                    
                        </div>
                </div >
            </div>
            
        );
    }
}
export default Globaltemp;