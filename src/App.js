import React, { Component } from 'react';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = '771a87d97e2ea9428a4f954571bba7bd';

export default class App extends Component {
  state = {
    temperature: null,
    city: null,
    country: null,
    humidity: null,
    description: null,
    error: null
  }

  getData = async (e) => {
    e.preventDefault(); // Prevents full page refresh so data successfully appears
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`).then(response => response.json());
    console.log(data);

    this.setState({
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
        <Weather />
      </div>
    )
  }
}
