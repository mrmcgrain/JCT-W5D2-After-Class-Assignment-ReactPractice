import { useState } from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.css'

import Header from "./components/Header/Header"
import Landing from "./components/Landing/Landing"
import HTML from "./components/HTML/Html"
import CSS from "./components/CSS/Css"
import JS from "./components/JS/JS"


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>



      <BrowserRouter>

        <Routes>
          {/* <Header/> */}

            <Route path="/" element={<Landing />} />

            <Route path="/html" element={<HTML />} />
            <Route path="/css" element={<CSS />} />
            <Route path="/js" element={<JS />} />
  

          {/* </Header> */}



        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
