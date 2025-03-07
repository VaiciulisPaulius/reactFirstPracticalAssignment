import { useState } from 'react'
import TaskForm from './components/pirmasUzd/TaskForm'
import TaskList from './components/pirmasUzd/TaskList'
import { Link, Route, Router, Routes } from 'react-router'
import Cart from './components/antrasUzd/Cart'

function App() {
  return (
    <>
      <nav>
        <ul>
          <li><Link to={'/pirmasUzd'}>Pirmas uzduotis</Link></li>
          <li><Link to={'/antrasUzd'}>Antras uzduotis</Link></li>
          <li><Link to={'/treciasUzd'}>Trecias uzduotis</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/pirmasUzd" element={<TaskList/>}></Route>
        <Route path="/antrasUzd" element={<Cart/>}></Route>
        <Route path="/treciasUzd" element={<TaskList/>}></Route>
      </Routes>
    </>
  )
}

export default App
