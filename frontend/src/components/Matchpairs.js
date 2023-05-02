import { Link } from "react-router-dom";
import "./Matchpairstyle.css"

export default function Level(props) {
  const timesToLoop = 10;

  return (
    <div className="mtp">
    <h1 className="ph1">{props.title}</h1>
    <div className="pairs">
      {Array.from({ length: timesToLoop }, (_, index) => (
        <div key={index+1} className="level">
          <Link to={props.name+index} >
               <h3>Level {index+1}</h3>
          </Link>
        </div>
        
      ))}
    </div>
    </div>
  );
}
