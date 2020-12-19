import React from 'react';
import './no2.css'

class NitrousOxide extends React.Component{
    
    state = {
        conc : [],
        info : {}
    }

    componentDidMount(){
        
        fetch("https://global-warming.org/api/nitrous-oxide-api")
        .then(res => res.json())
        .then((data) => {
            const newConc = data.nitrous;
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
        let no2value= this.state.info.average
        let no2inkg= 4.2 * no2value
        Math.round(no2inkg)
        return(
            <div className = "no2-value">
                <div className="no2-heading">Nitrous Oxide</div>
                <div className="no2-value-in-kg">{no2inkg.toFixed(2)}{""} Trillion Kg</div>
            </div>
        );
    }
}
export default NitrousOxide;