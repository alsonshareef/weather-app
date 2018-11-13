import React, { Component } from 'react';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = '771a87d97e2ea9428a4f954571bba7bd';

export default class App extends Component {
  // Initial state
  state = {
    latitude: null,
    longitude: null,
    coordinates: null,
    temperature: null,
    city: null,
    country: null,
    humidity: null,
    description: null,
    error: null
  }

  getData = async (e) => {
    // Prevents full page refresh so data successfully appears
    e.preventDefault();

    // Set input values to variables
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    
    // Filter fetch request URL based on input values and logs response data
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`).then(response => response.json());
    console.log(data);

    // Change initial state props to the response data
    this.setState({
      latitude: data.coord.lat,
      longitude: data.coord.lon,
      temperature: data.main.temp,
      city: data.name,
      country: data.sys.country,
      humidity: data.main.humidity,
      description: data.weather[0].description
    })
  }

  render() {
    return (
      <div>
        <Titles />
        <Form getData={this.getData}/>
        <Weather 
          latitude={this.state.latitude}
          longitude={this.state.longitude}
          coordinates={this.state.coordinates}
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
        />
      </div>
    )
  }
}
