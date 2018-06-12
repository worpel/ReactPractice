import React from "react";

class Weather extends React.Component {
    render() {
        return (
            <div class="main">
                <h2>{this.props.city}</h2>
                <h2>{this.props.location}</h2>
                <h2>{this.props.temperature}</h2>
                <h2>{this.props.humidity}</h2>
            </div>
        );
    }
}

export default Weather