import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import UserApp from './Users/UserApp'
const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/user' element={<UserApp />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
