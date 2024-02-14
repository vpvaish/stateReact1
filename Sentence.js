import React from 'react'

export default function Sentence(props) {
    const x =10;
    function change(){ 
        alert(' The Square Of This Number Is :  ' + (x*x))
    }
  return (
    <div>
      <h1>
        Hello Your Value is : {x}
      </h1>
      <button onMouseOver={change} >
      The Square Of Given Number Is : 
      </button>    
    </div>
  )
}
