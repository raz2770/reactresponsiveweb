import React from 'react';
import './co2emissioninkg.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
class Co2emissioninkg extends React.Component{
    
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
        let co2valueinkg = co2value*4.2

        return(   
           <div className = "co2inkg">
            <div className = "co2-valueinkg">
           <div className="co2-heading">Carbon Dioxide</div>
           <div className="co2-value-in-kg">{co2valueinkg.toFixed(2)}{""} Trillion Kg</div>
       </div>
       </div>
        );
    }
}
export default Co2emissioninkg;