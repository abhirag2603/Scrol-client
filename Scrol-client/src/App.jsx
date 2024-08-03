import React from 'react'
import {BrowserRouter,Navigate,Routes,Route} from 'react-router-dom'
import {RecoilRoot,} from 'recoil';
import Login from './components/Login';
import HomePage from './components/HomePage';
import Profile from './components/Profile';
import Register from './components/Register';

const App = () => {
  return (
    <RecoilRoot>
    <div className='app'>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/home' element={<HomePage/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/profile/:userId' element={<Profile/>}/>
      </Routes>
      </BrowserRouter>
    </div>
    </RecoilRoot>
  )
}

export default App
