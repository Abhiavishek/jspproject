import React from 'react'
import Home from './Components/Home'
import {BrowserRouter,Routes,Route} from "react-router-dom";

import Edit from './Components/Edit';
import CreateStd from './Components/CreateStd';
import StudentDetails from './Components/StudentDetails';
const App = () => {
  return (
    <BrowserRouter>
    <Home/>
    <Routes>
        <Route path='/createstd' element={<CreateStd/>}/>
        <Route path="/studentdetails" element={<StudentDetails/>}/>
        <Route path='/edit/:index' element={<Edit></Edit>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App