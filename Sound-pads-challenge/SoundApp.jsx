
import pads from "./pads"
import React from "react"
import "./soundPad.css"

export default function SoundApp(props) {
  const [soundPads, setSoundPads] = React.useState(pads)
  const soundPadButtons = soundPads.map(pad => (
      <button key={pad.id}></button>
  ))
  return (
    <main>
      <div className="pad-container">
        {soundPadButtons}
      </div>
    </main>
  )
}
