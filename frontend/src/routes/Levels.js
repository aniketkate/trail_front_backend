import Level from "../components/Matchpairs";
import Navbar from "../components/Navbar";


function level(props) {
    return(
        <>
        <Navbar/>
        <Level title={props.title} name={props.name}/>
        </>
    );
}

export default level;