import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './pages/common/Navbar'
import Dashboard from './pages/Dashboard/index'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Navbar/> */}
      <Dashboard/>
    </>
  )
}

export default App
