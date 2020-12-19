import React from 'react';

class Temperature extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            info : {},
            city : "",
            isLoaded : ""
        };
        this.getTemperature = this.getTemperature.bind(this);
    }

    getTemperature(name){
        this.setState({isLoaded : false});
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&units=metric&appid=93dd43642be68e35c4c05698e2b7222e`)
        .then(response => response.json())
        .then((data) => {
            const newInfo = data;
            console.log(data);
            const newState = Object.assign({},this.state,{
                info : newInfo,
                isLoaded : true,
                city : name,
            });
            this.setState(newState);
        })
        .catch(error => console.log(error));
    }

    componentDidMount(){
        console.log("Fetched name " + this.props.name);
        this.getTemperature(this.props.name);
    }

    componentDidUpdate(prevProps){
        if(prevProps.name !== this.props.name)
            this.getTemperature(this.props.name);
    }
    render(){
        if(!this.state.isLoaded)
        return(
            <div>Loading.... </div>
        );
        else if(this.state.info.cod === "404")
            return(
                <div>Not a valid city</div>
            );
        else{
            return(
            <div className = "App">The current temperature in {this.state.city} is {this.state.info.main.temp} °C</div>
            );
        }
    
    }

}
export default Temperature;