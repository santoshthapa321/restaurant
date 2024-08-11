import React from 'react'
import "./App.css";
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from './Pages/Home.jsx';
import Success from './Pages/Success.jsx';
import Admin from "./Pages/Admin.jsx";
import NotFound from './Pages/NotFound.jsx';


const App = () => {
  return (
   <>
   <Router>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Success" element={<Success/>}/>
      <Route path="*" element={<NotFound/>}/>
      <Route path="/login" element={<Admin/>}></Route>
    </Routes>
   </Router>
   </>
  )
}

export default App
