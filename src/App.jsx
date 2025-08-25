import { use, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './assets/componets/sidebar/sidebar'
import RightSide from './assets/componets/rightside/rightSide'
import RightBelow from './assets/componets/rightbelow/RightBelow'

/*function App() {
  const[name, setname] = useState('Ada')

  console.log(name)

  useEffect(() => {
    setname('Bob')
  }, [])

  return (
    <div>

    </div>
  )
}
  */

function App() {
  /*const[count, setCount] = useState(1)
  const[subject, setSubject] = useState(false)

    useEffect(() => {
      setCount(1)
    }, []);*/

    return (
      <div className="main-layout">
        <Sidebar />
      <div className="right-layout"> 
        <RightSide />
        <RightBelow />
        {/* <button onClick={() => setCount(count + 1)}>Tap to count</button>
        <p>Count: {count}</p> */}
      </div>
      </div>
    );
}



export default App