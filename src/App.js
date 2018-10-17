import React, { Component } from 'react';
import './App.css';
import Solution from './Components/Solution'
import Blank from './Components/Blank'

const emptyStyle = { background: 'black' }

class App extends Component {
  constructor() {
    super()
    this.state = {
      grid: {
        row1: ['*', '*', 'K', 'I', 'W', 'I'],
        row2: ['B', '*', '*', 'D', 'A', 'N'],
        row3: ['A', 'T', 'T', 'E', 'S', 'T'],
        row4: ['S', 'A', 'R', 'A', 'P', 'E'],
        row5: ['I', 'C', 'E', '*', '*', 'R'],
        row6: ['L', 'O', 'K', 'I', '*', '*']
      }
    }
  }

  render() {
    const { grid } = this.state
    return (
      <div>
        <Solution grid={grid} emptyStyle={emptyStyle} />
        <Blank grid={grid} emptyStyle={emptyStyle} />
      </div>
    );
  }
}

export default App;
