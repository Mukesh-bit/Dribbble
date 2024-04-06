import React from 'react'
import SignUpForm from './pages/SignUpForm'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CreateAccount from './pages/CreateAccount'
import SelectOptions from './pages/SelectOptions'
import Verify from './pages/Verify'

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignUpForm/>}/>
        <Route path='/createAccount' element={<CreateAccount/>}/>
        <Route path='/selectOptions' element={<SelectOptions/>}/>
        <Route path='/verify' element={<Verify/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App