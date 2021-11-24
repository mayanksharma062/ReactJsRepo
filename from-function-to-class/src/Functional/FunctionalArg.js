import React, {useState} from 'react'

function FunctionalArg() {
    const [stateCount, setStateCount] = useState(0);
    const [stateUsername, setStateUsername] = useState("");
  
    function handleClick() {
      setStateCount((prevVal)=>{
        return prevVal + 1
      })
    }
  
    function handleChange(event) {
      setStateUsername(event.target.value);
    }
    return (
        <div>
        <p>There have been {stateCount} events.</p>
        <p>
          <button onClick={handleClick}>Click Me</button>
        </p>
        <p>You typed: {stateUsername}</p>
        <p>
          <input onChange={handleChange} />
        </p>
      </div>
    )
}

export default FunctionalArg
