import React, { Component } from 'react'

export default class Blank extends Component {
    constructor() {
        super()
        this.state = {
            attempt: {}
        }
    }

    componentDidMount() {
        const { grid } = this.props
        for (var key in grid) {
            grid[key] = grid[key].join('').replace(/[A-Z]/gi, ' ').split('')
        }
        this.setState({attempt:grid})
    }

    userEntry = (value, keyName, index) =>{
        let attempt = {...this.state.attempt}
        attempt[keyName].splice(index, 1, value)
        this.setState({attempt})
    }

    render() {
        // console.log(this.state.attempt)
        const {attempt} =this.state
        const { emptyStyle, grid } = this.props
        const gridKeyNames = Object.keys(grid)
        const puzzle = gridKeyNames.map((keyName, gridI) => {
            return (
                <tr key={gridI}>
                    {grid[keyName].map((box, rowI) => {
                        return (
                            <td key={rowI} style={box === '*' ? emptyStyle : null} >
                                {box === '*' ?
                                    box :
                                    <input type="text"
                                        onChange={e => this.userEntry(e.target.value, keyName, rowI)}
                                        value={attempt[keyName] ? attempt[keyName][rowI]: ''}
                                    />
                                }
                            </td>
                        )
                    })}
                </tr>
            )
        })

        return (
            <div className="Solution">
                {puzzle}
            </div>
        )
    }
}
