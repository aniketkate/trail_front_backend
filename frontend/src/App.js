import "./styles.css";
//import Navbar from "./components/Navbar"
import { Route, Routes } from "react-router-dom";
//import { useRef } from "react";

import Home from "./routes/Home";
import Service from "./routes/Service";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Register from "./routes/Register";
import RQuize from "./routes/Levels";
import Quize from "./routes/Rquizroutes";
import Login from "./routes/login";
import QuizeMTP from "./routes/Quizroutes";
import Mtf from "./routes/Levels";
localStorage.removeItem('username');

export default function App() {
  return(
    <div className="App">
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/service" exact element={<Service/>}/>
          <Route path="/about" exact element={<About/>}/>
          <Route path="/contact" exact element={<Contact />}/> 
          <Route path="/register" exact element={<Register/>}/>
          <Route path="/quize" exact element={<Mtf title="Match The Pairs" name="quize"/>}/>
          <Route path="/rquiz" exact element={<RQuize title="Quizes"  name="rquize"/>}/>
          <Route path="/login" exact element={<Login/>}/>
      </Routes>
      <QuizeMTP/>
      <Quize/>
    </div>
  )
}