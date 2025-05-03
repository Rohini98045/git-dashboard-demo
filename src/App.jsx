
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Dashboard from './Dashboard/Dashboard'
import About from './Templates/About'
import Contact from './Templates/Contact'
import Header from './Templates/Header'
import Home from './Templates/Home'
import Login from './Templates/Login'

function App() {

  return (
    <>
      {/* <h1>React Dashboard</h1> */}

      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/dashboard/*' element={<Dashboard/>}></Route>
      </Routes>

      </BrowserRouter>
      
    </>
  )
}

export default App
