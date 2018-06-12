import React from "react";

class Form extends React.Component {

    render() {
        return (
            <form className="formStyle" onSubmit={this.props.fetchWeather}>
                <input class="fields" type="text" name="city" placeholder="Type your city here" />
                <input class="fields" type="text" name="country" placeholder="Type your country here" />
                <button id="fetchBtn">Go Fetch</button>
            </form>
        );
    }
}

export default Form