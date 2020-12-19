import React from 'react';
import './co2emission.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
class Co2emission extends React.Component{
    
    state = {
        conc : [],
        info : {}
    }

    componentDidMount(){
        
        fetch("https://global-warming.org/api/co2-api")
        .then(res => res.json())
        .then((data) => {
            const newConc = data.co2;
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
        let co2value = this.state.info.trend
        return(
            <div className = "co2-emission row">
                 <div className="co2-content">
                    <div className="footer-co2"><h1>Carbon Dioxide </h1> </div>
                    <div className="co2-symbols">
                    <span> {co2value}</span>
                    <div className="co2-small"><span>Parts Per Million</span></div>
                   
                    
                        </div>
                </div >
                
               
            </div>
        );
    }
}
export default Co2emission;