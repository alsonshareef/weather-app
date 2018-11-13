import React from 'react'

const Weather = props => {
  return (
    <div>
        {props.city && props.country ? <p>Location: {props.city}, {props.country}</p> : null}
        {props.latitude && props.longitude ? <p>Latitude: {props.latitude}  Longitude: {props.longitude}</p> : null}
        {props.temperature ? <p>Temperature: {props.temperature}</p> : null}
        {props.humidity ? <p>Humidity: {props.humidity}</p> : null}
        {props.description ? <p>Description: {props.description}</p> : null}
        {props.error ? <h2>{props.error}</h2> : null}
    </div>
  )
}

export default Weather;