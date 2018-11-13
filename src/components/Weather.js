import React, { Component } from 'react'

export default class Weather extends Component {
  render() {
    return (
      <div>
        <div>Location: {this.props.city}, {this.props.country}</div>
        <div>Latitude: {this.props.latitude}  Longitude: {this.props.longitude}</div>
        <div>Temperature: {this.props.temperature}</div>
        <div>Humidity: {this.props.humidity}</div>
        <div>Description: {this.props.description}</div>
      </div>
    )
  }
}
