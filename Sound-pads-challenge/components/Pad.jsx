export default function Pad(props) {
  console.log(props)
  return ( 
    <button 
      onClick={() => props.toggleOnOff(props.id)}
      style={{backgroundColor: props.color}}
      className= {props.on ? "on" : ""}
    ></button> 
  )
}
