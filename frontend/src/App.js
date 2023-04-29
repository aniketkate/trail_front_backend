import "./styles.css";
//import Navbar from "./components/Navbar"
import { Route, Routes } from "react-router-dom";
//import { useRef } from "react";

import Home from "./routes/Home";
import Service from "./routes/Service";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Register from "./routes/Register";
import QuizeMTP from "./routes/Quize";

export default function App() {
  return(
    <div className="App">
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/service" exact element={<Service/>}/>
          <Route path="/about" exact element={<About/>}/>
          <Route path="/contact" exact element={<Contact />}/> 
          <Route path="/register" exact element={<Register/>}/>
          <Route path="/quize" exact element={<QuizeMTP/>}/>
      </Routes>

      {/* <Navbar /> */}
       {/* <Home/>  */}
    </div>
  )
}