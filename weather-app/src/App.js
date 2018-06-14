import React from 'react';
import Headings from './components/Headings';
import Form from './components/Form';
import Weather from './components/Weather';
import './index.css';

const API_KEY = 'd1d1c71914712159c9a05d89de951e50'

class App extends React.Component {
  state = {
    city: undefined,
    location: undefined,
    weather: undefined,
    temperature: undefined,
    humidity: undefined,
  }
  fetchData = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const API_CALL = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await API_CALL.json();
    console.log(data);
    this.setState({
      city: "City: " + data.name,
      location: "Location: " + data.sys.country,
      weather: "Weather Type: " + data.weather[0].main,
      temperature: "Temperature: " + data.main.temp + "°C",
      humidity: "Humidity: " + data.main.humidity + "%",
    });
  }
  render() {
    return (
      <div id="Main">
        <Headings />
        <Form fetchWeather={this.fetchData} />
        <Weather city={this.state.city} location={this.state.location} weather={this.state.weather} temperature={this.state.temperature} humidity={this.state.humidity} />
      </div>
    );
  }
}

export default App;