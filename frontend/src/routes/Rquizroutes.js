import { Route, Routes } from "react-router-dom";
import RQuize from "./Rquizes";


export default function QuizR() {
    return(
      <div className="QuizR">
        <Routes>
            <Route path="/rquiz/rquize0" element={<RQuize/>}/>
            <Route path="/rquiz/rquize1" exact element={<RQuize/>}/>
            <Route path="/rquiz/rquize2" exact element={<RQuize/>}/>
            <Route path="/rquiz/rquize3" exact element={<RQuize />}/> 
            <Route path="/rquiz/rquize4" exact element={<RQuize/>}/>
            <Route path="/rquiz/rquize5" exact element={<RQuize/>}/>
        </Routes>
  
        {/* <Navbar /> */}
         {/* <Home/>  */}
      </div>
    )
  }