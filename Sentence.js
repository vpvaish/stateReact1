import React from 'react'

export default function Sentence(props) {
    const x =10;
    const y = 7;
    function change(){ 
        alert('change value is ' + y)
    }
  return (
    <div>
      <h1>
        Hello Your Value is : {x}
      </h1>
      <button onMouseOver={change} >
      change is done 
      </button>    
    </div>
  )
}
