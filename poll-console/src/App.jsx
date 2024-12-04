import Dashboard from './components/Dashboard'
import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Login from './components/Auth/Login'

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route  path='/' element={<Login/>}/>
        <Route  path='/dashboard' element={<Dashboard/>}/>
      </Routes>
      </Router>
    </>
  )
}

export default App
