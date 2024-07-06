import React from 'react'

const ChildComponent1 = ({handleSelect}) => {
    
  return (
    <div style={{backgroundColor:'red', padding:'0.5rem'}}>
        <h2>Child Component1</h2>
        <button onClick={(e) => handleSelect(e.target.textContent)}>Option 1</button>
    </div>
  )
}

export default ChildComponent1