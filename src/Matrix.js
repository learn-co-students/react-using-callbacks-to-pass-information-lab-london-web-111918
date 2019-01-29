import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor() {
    super()
    this.state = {
      chosenColour: '#fff'
    }
  }

  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val} getColour={this.getColour}/>)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )

  
  setColour = (colour) => {
    console.log(colour)
    this.setState({chosenColour: colour })
  }

  getColour = () => {
    return this.state.chosenColour 
  }

  render() {
    return (
      <div id="app">
        <ColorSelector setColour={this.setColour}/>
        <div id="matrix">
          {this.genMatrix()}
        </div>
      </div>
    )
  }

}

Matrix.defaultProps = {
  values: chromeBoi
}
