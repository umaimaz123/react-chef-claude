
import pads from "./pads"
import React from "react"
import "./soundPad.css"
import Pad from "./components/Pad.jsx"

export default function SoundApp(props) {
  const [soundPads, setSoundPads] = React.useState(pads)

  const soundPadButtons = soundPads.map(pad => (
      <Pad key={pad.id}
        color={pad.color}
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
