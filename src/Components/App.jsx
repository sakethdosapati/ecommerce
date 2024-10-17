import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import EstoreHome from './EstoreHome'
import Login from '../Pages/Login'
import Signup from '../Pages/Signup'
import Productpage from '../Pages/Productpage'
export default function App(){
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<EstoreHome/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/productpage" element={<Productpage/>} />
    </Routes>
    </BrowserRouter>
  )
}