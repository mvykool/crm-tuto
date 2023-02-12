import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"


//import pages
import Dashboard from "./pages/Dashboard"
import TicketPage from "./pages/TicketPage"

//import components
import Navbar from "./components/Navbar"


function App() {
 

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
         <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/ticket" element={<TicketPage/>}/>
          <Route path="/ticket/:id" element={<TicketPage  />}/>
         </Routes>
      </BrowserRouter> 
    </div>
  )
}

export default App
