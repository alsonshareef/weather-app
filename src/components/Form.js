import React, { Component } from 'react'

export default class Form extends Component {
  render() {
    return (
      <div>
          <form onSubmit={this.props.getData}>
              <input type='text' placeholder='City' name='city'/>
              <input type='text' placeholder='Country' name='country'/>
              <button>Get Weather</button>
          </form>
      </div>
    )
  }
}
