import "./styles.css";
//import Navbar from "./components/Navbar"
import { Route, Routes } from "react-router-dom";
//import { useRef } from "react";

import Home from "./routes/Home";
import Service from "./routes/Service";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Register from "./routes/Register";

export default function App() {
  return(
    <div className="App">
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/service" element={<Service/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact />}/> 
          <Route path="/register" element={<Register/>}/>
      </Routes>

      {/* <Navbar /> */}
       {/* <Home/>  */}
    </div>
  )
}