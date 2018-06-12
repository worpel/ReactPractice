import React from "react";

class Form extends React.Component {

    render() {
        return (
            <form class="formStyle" onSubmit={this.props.fetchWeather}>
                <input id="field1" type="text" name="city" placeholder="Type your city here" />
                <input id="field2" type="text" name="country" placeholder="Type your country here" />
                <button id="fetchBtn">Go Fetch</button>
            </form>
        );
    }
}

export default Form