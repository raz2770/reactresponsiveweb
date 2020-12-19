import React from "react";
import './airfront.css';
import Cityapi from './../city-api/city-api';



class Airquality extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: {},
      city: {},
      isLoaded: false,
      name : "",
      value:{},
     
    };
  }
  



  getAirquality (search) {
    fetch(
      `https://api.waqi.info/feed/${search}/?token=04c43dc59061d365fb26a043bfa1150d49f26e74`
    )
      .then((response) => response.json())
      .then((data) => {
        const newInfo = data.data;
        const newCity = newInfo.city;
        const loaded = true;
        const newName = search;
        const newState = Object.assign({}, this.state, {
          isLoaded: loaded,
          info: newInfo,
          city: newCity,
          name : newName,
        });
        console.log(newInfo);
        this.setState(newState);
      });
  };

  componentDidMount () {
    this.getAirquality(this.props.search);


  }
  
  componentDidUpdate(prevProps){
    if(this.props.search !== prevProps.search)
        this.getAirquality(this.props.search);
        
  }


  

  render () {

    const apivalue = this.state.info.aqi
    let class_name =""
    let level=""
    let health_implication=""
    let cautionary_statement=""

    if(apivalue <= 50){
      class_name="api-bar-green"
      level="Good"
      health_implication="Air quality is considered satisfactory, and air pollution poses little or no risk"
      cautionary_statement="None"
    }

    if(apivalue > 50 && apivalue <= 100){
      class_name="api-bar-yellow"
      level="Moderate"
      health_implication="Air quality is acceptable; however, for some pollutants there may be a moderate health concern for a very small number of people who are unusually sensitive to air pollution."
      cautionary_statement="Active children and adults, and people with respiratory disease, such as asthma, should limit prolonged outdoor exertion."
    }

    if(apivalue > 100 && apivalue <= 150){
      class_name="api-bar-orange"
      level="Unhealthy For Sensitive Groups"
      health_implication="Members of sensitive groups may experience health effects. The general public is not likely to be affected."
      cautionary_statement="Active children and adults, and people with respiratory disease, such as asthma, should limit prolonged outdoor exertion."
    }

    
    if(apivalue > 150 && apivalue <= 200){
      class_name="api-bar-red"
      level="Unhealthy"
      health_implication="Everyone may begin to experience health effects; members of sensitive groups may experience more serious health effects"
      cautionary_statement="Active children and adults, and people with respiratory disease, such as asthma, should avoid prolonged outdoor exertion; everyone else, especially children, should limit prolonged outdoor exertion"
    }

    
    if(apivalue > 200 && apivalue <= 300){
      class_name="api-bar-purple"
      level="Very Unhealthy"
      health_implication="Health warnings of emergency conditions. The entire population is more likely to be affected."
      cautionary_statement="Active children and adults, and people with respiratory disease, such as asthma, should avoid all outdoor exertion; everyone else, especially children, should limit outdoor exertion."
    }

    
    if(apivalue > 300){
      class_name="api-bar-danger-red"
      level="Hazardous"
      cautionary_statement="Everyone should avoid all outdoor exertion"
      health_implication="Health alert: everyone may experience more serious health effects"
    }

    
    if (!this.state.isLoaded) {
      return <div>....Loading</div>;    
    } 
    else if(this.state.info === "Unknown station" || this.state.info === {}){
            return <div>No data available for {this.state.name} </div>
    }
    else {
      return (
        <div className="App">
          <div className="air-api-row">
            <div className="air-api-info">
              <div className="air-api-general air-mg"> AQI </div>
              <div className="air-api-name "> Air Quality Index </div>
              <div className="air-api-fetched air-mg "> {this.state.info.aqi}</div>
            </div>
            <div className={class_name}></div>
          </div>
          <div className="air-api-gen-info">
            <div className="air-api-gen-info-level info-mg">
              <div className="heading-level">Pollution Level</div>
              <div className="level-info">{level}</div>
            </div>
            <div className="air-api-gen-info-health-implications info-mg">
              <div className="heading-impli">Health Implications</div>
              <div className="impli-info">{health_implication}</div>
            </div>
            <div className="air-api-gen-info-statement info-mg">
              <div className="heading-statement">Cautionary Statements</div>
              <div className="statement-info">{cautionary_statement}</div>
            </div>
          </div>
        </div>
      );
    }
  }
}
export default Airquality;