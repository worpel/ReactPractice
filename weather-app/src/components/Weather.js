import React from "react";

class Weather extends React.Component {
    render() {
        // if (this.props.weather === 'Clouds') {
        //     document.body.style.backgroundImage = "url('/img/clear.jpg')"
        //     console.log(this.props.weather);
        // }
        return (
            <div className="results">
                <h2>{this.props.city}</h2>
                <h2>{this.props.location}</h2>
                <h2>{this.props.weather}</h2>
                <h2>{this.props.temperature}</h2>
                <h2>{this.props.humidity}</h2>
            </div>
        );
    }
}

export default Weather