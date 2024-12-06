import Dashboard from './components/Dashboard'
import QuestionDetail from './components/Question_detail'
import BarChart from './components/Results'
import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Login from './components/Auth/Login'

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route  path='/' element={<Login/>} />
        <Route  path='/dashboard' element={<Dashboard/>}/>
        <Route path='/question_detail/:id' element={<QuestionDetail/>}/>
        <Route path='/results' element={<BarChart/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
