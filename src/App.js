import React from 'react'
import Header from './Header'
import Home from './Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Checkout from './Checkout'

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          {/* checkout route */}
          <Route path="/checkout" element={<Checkout />} />

          {/* home route */}
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
