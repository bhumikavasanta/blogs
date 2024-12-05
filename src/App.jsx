import React, { useState } from "react"
import './App.css'
import Input from "./components/Input"

const App = () => {

  return (
    <div className="container">
      <div className="outerContainer">
        <div className="heading">
          Blogs
        </div>
        <div>
          <Input />
        </div>
        <div className="blogs">
          Cards
        </div>
      </div>
    </div>
  )
}

export default App
