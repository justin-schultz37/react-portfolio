import { useState } from 'react'
import Header from '../src/components/Header.jsx';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    < Header />
  )
}

export default App
