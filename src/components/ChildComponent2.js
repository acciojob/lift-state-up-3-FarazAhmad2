import React from 'react'

const ChildComponent2 = ({handleSelect}) => {
  return (
    <div style={{backgroundColor:'yellow', padding:'0.5rem'}}>
        <h2>Child Component2</h2>
        <button onClick={(e) => handleSelect(e.target.textContent)}>Option 2</button>
    </div>
  )
}

export default ChildComponent2