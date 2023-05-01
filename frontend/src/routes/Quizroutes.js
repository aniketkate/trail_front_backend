import { Route, Routes } from "react-router-dom";
import QuizeMTP from "./Quize";


export default function QuizR() {
    return(
      <div className="QuizR">
        <Routes>
            <Route path="/quize/quize0" element={<QuizeMTP/>}/>
            <Route path="/quize/quize1" exact element={<QuizeMTP/>}/>
            <Route path="/quize/quize2" exact element={<QuizeMTP/>}/>
            <Route path="/quize/quize3" exact element={<QuizeMTP />}/> 
            <Route path="/quize/quize4" exact element={<QuizeMTP/>}/>
            <Route path="/quize/quize5" exact element={<QuizeMTP/>}/>
        </Routes>
  
        {/* <Navbar /> */}
         {/* <Home/>  */}
      </div>
    )
  }