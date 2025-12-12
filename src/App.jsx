import Count from "./components/Count"
import Header from "./components/Header"  
import Main from "./components/Main"
import React from "react" 

export default function App() {
  // ********* Commented out counter code **********
  const [count, setCount] = React.useState(0)
    
     {/* 
     * Note: if you ever need the old value of state
     * to help you determine the new value of state,
     * you should pass a callback function to your
     * state setter function instead of using
     * state directly. This callback function will
     * receive the old value of state as its parameter,
     * which you can then use to determine your new
     * value of state. 
     * 
     * function add() {
        setCount(prevCount=> prevCount + 1)
        setCount(prevCount=> prevCount + 1)
        setCount(prevCount=> prevCount + 1)
      }

      function subtract() {
          setCount(count - 1)
          setCount(count - 1)
          setCount(count - 1)
      }
     * 
     * */}
     
    function add() {
      setCount(prevCount=> prevCount + 1)
    }

    function subtract() {
      setCount(count - 1)
    }

  return (
    <>  
      <Header />
      <Main />

      <main className="container">
        <h1>How many times will Bob say "state" in this section?</h1>
        <div className="counter">
          <button className="minus" onClick={subtract} aria-label="Decrease count">–</button>
          <Count number={count} />
          <button className="plus" onClick={add} aria-label="Increase count">+</button>
        </div>
      </main>

       {/* /**
        * Passing state as props Challenge:
        * - Create a new component called `Count`
        *    - It should receive a prop called `number`, whose value
        *      is the current value of our count
        *    - Have the component render the h2.count element below
        *      and display the incoming prop `number`
        * - Replace the h2.count below with an instance of
        *   the new Count component, passing the correct value
        *   to its `number` prop.
        * - After doing this, everything should be working the
        *   same as before.
        */}
    </>
  )
}
