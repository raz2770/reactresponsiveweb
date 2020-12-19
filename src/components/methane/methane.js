import React from 'react';
import './methane.css'

class Methane extends React.Component{
    
    state = {
        conc : [],
        info : {}
    }

    componentDidMount(){
        
        fetch("https://global-warming.org/api/methane-api")
        .then(res => res.json())
        .then((data) => {
            const newConc = data.methane;
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
        let ch4value= this.state.info.average
        let ch4inkg= 4.2 * ch4value
        return(
            <div className = "methane">
                 <div className = "ch4-value">
                <div className="ch4-heading">Methane</div>
                <div className="ch4-value-in-kg">{ch4inkg.toFixed(2)}{""} Trillion Kg</div>
            </div>
            </div>
        );
    }
}
export default Methane;
