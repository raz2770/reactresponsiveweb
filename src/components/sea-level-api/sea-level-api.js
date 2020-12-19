import React from 'react';
import './sea-level-api.css'

class Artic extends React.Component{
    
    state = {
        conc : [],
        info : {}
    }

    componentDidMount(){
        
        fetch("https://global-warming.org/api/arctic-api")
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
        return(
            <div className = "sea-footer row">
            <div className="sea-content">
                <div className="footer-sea"><h1>Arctic Ice Extent </h1> </div>
                <div className="sea-symbols">
                
                <span> {this.state.info.extent}</span>
                <div className="sea-small"><span>Million sq. km</span></div>
                
                    </div>
            </div >
        </div>
        );
    }
}
export default Artic;