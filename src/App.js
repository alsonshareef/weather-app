import React, { Component } from 'react';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';
import {WEATHER_URL} from './constants';

export default class App extends Component {
  constructor() {
    super();
    // Initial state
    this.state = this.blankState();
  }

  blankState = () => ({
      latitude: null,
      longitude: null,
      coordinates: null,
      temperature: null,
      city: null,
      country: null,
      humidity: null,
      description: null,
      error: null,
  })

  getData = async (e) => {
    // Prevents full page refresh so data successfully appears
    e.preventDefault();

    // Set input values to variables
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    
    // Filter fetch request URL based on input values and logs response data
    const data = await fetch(WEATHER_URL.replace('{1}', city).replace('{2}', country)).then(response => response.json()).catch(console.error);

    // If a value is given for city and country input, log data and change state props
    if (city && country) {
      this.setState({
        ...this.blankState(),
        latitude: data.coord.lat,
        longitude: data.coord.lon,
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
      })
    } else {
      this.setState({
        ...this.blankState(),
        error: "Please make sure you have filled out form before submitting"
      })
    }
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
          error={this.state.error}
        />
      </div>
    )
  }
}
