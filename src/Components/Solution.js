import React from 'react'
const fullStyle = {
    width: '20px',
    height: '20px',
    textAlign: 'center'
}

export default function Solution({ emptyStyle, grid }) {
    const gridKeyNames = Object.keys(grid)
    console.log(gridKeyNames) 
    const puzzleSolution = gridKeyNames.map((keyName, gridI) => {
        return (
            <tr key={gridI}>
                {grid[keyName].map((box, rowI) => {
                    return (
                        <td key={rowI} style={box === '*' ? emptyStyle : fullStyle} >{box}</td>  
                    )
                })}
           </tr>
       )
   }) 

  return (
      <div className="Solution">
          { puzzleSolution }
      </div>
  )
}
