import React from 'react'
import "./App.css";
//import Login from './pages/login/login';
import Signup from './pages/Signup/signup';
import Home from './pages/Home/Home';
const App = () => {
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      {/* <Login/> */}
      {/* <Signup/> */}
      <Home/>
    </div>
  )
}

export default App
