import Dashboard from './components/Dashboard'
import QuestionDetail from './components/Question_detail'
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
      </Routes>
    </Router>
    </>
  )
}

export default App
