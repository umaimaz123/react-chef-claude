
import pads from "./pads"
import React from "react"
import "./soundPad.css"

export default function SoundApp(props) {
  const [soundPads, setSoundPads] = React.useState(pads)

  const styles = {
    backgroundColor: props.darkMode ? "#222222" : "#cccccc",
  }
  
  const soundPadButtons = soundPads.map(pad => (
      <button style={styles} key={pad.id}></button>
  ))
  
  return (
    <main>
      <div className="pad-container">
        {soundPadButtons}
      </div>
    </main>
  )
}
