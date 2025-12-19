
import pads from "./pads"
import React from "react"
import "./soundPad.css"
import Pad from "./components/Pad.jsx"

export default function SoundApp(props) {
  const [soundPads, setSoundPads] = React.useState(pads)
   
  function toggleOnOff(id) {
    // map over the pads array, and if the current item has
    // the same id as the one passed to this function, then
    // flip its `on` value.
    setSoundPads(prevSoundPads => prevSoundPads.map(pad => {
        return pad.id === id ? {...pad, on: !pad.on} : pad
      })
    )
  }

  const soundPadButtons = soundPads.map(pad => (
      <Pad key={pad.id}
        id ={pad.id}
        color={pad.color}
        on={pad.on}
        toggleOnOff={toggleOnOff}
      />
     
  ))
  
  return (
    <main>
      <div className="pad-container">
        {soundPadButtons}
      </div>
    </main>
  )
}
