import React, { Component } from 'react'

export default class Weather extends Component {
  render() {
    return (
      <div>
        <p>Location: {this.props.city}, {this.props.country}</p>
        <p>Latitude: {this.props.latitude}  Longitude: {this.props.longitude}</p>
        <p>Temperature: {this.props.temperature}</p>
        <p>Humidity: {this.props.humidity}</p>
        <p>Description: {this.props.description}</p>
        <h2>{this.props.error}</h2>
      </div>
    )
  }
}
