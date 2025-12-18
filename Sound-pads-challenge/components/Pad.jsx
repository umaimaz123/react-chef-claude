import React from "react"

export default function Pad(props) {
  const [on, setOn] = React.useState(props.on)
   
  function toggleOnOff(){
    setOn(prevOn => !prevOn)
  }

  return ( 
    <button 
      onClick={toggleOnOff}
      style={{backgroundColor: props.color}}
      className= {on ? "on" : ""}
    ></button> 
  )
}
