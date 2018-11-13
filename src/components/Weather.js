import React, { Component } from 'react'

export default class Weather extends Component {
  render() {
    return (
      <div>
        {this.props.city && this.props.country ? <p>Location: {this.props.city}, {this.props.country}</p> : null}
        {this.props.latitude && this.props.longitude ? <p>Latitude: {this.props.latitude}  Longitude: {this.props.longitude}</p> : null}
        {this.props.temperature ? <p>Temperature: {this.props.temperature}</p> : null}
        {this.props.humidity ? <p>Humidity: {this.props.humidity}</p> : null}
        {this.props.description ? <p>Description: {this.props.description}</p> : null}
        {this.props.error ? <h2>{this.props.error}</h2> : null}
      </div>
    )
  }
}
