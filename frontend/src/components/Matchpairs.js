import { Link } from "react-router-dom";
import "./Matchpairstyle.css"

export default function Matchthepairs () {
  const timesToLoop = 10;

  return (
    <div className="pairs">
      <h1>Match The Pairs</h1>
      {Array.from({ length: timesToLoop }, (_, index) => (
        <div key={index+1} className="level">
          <Link to={"quize"+index} >
               <h3>Level {index+1}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
}
