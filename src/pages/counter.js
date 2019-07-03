import React, { Component } from 'react'

export default class Counter extends Component {
  constructor() {
    super()
    this.state = { count: 0 }
  }
  render() {
    return (
      <div style={{ color: this.props.color}}>
        <h1>Counter</h1>
        <p>Current count: {this.state.count}</p>
        <button onClick={() => 
          this.setState({ 
            count: this.state.count + 1
            })
          }>plus</button>

        <button onClick={() => 
          this.setState({ 
            count: this.state.count - 1})
          }>minus</button>
      </div>
    )
  }
}
