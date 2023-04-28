import "./HeroStyles.css";

function Hero(props) {
    return(
        <>
        <div className={props.cName}>
            <img alt="Herpimg" src={props.heroImg}/>
        </div>

        <div className="hero-text">

            <h1>{props.title}</h1>
            <h2>{props.text}</h2>
            <a href={props.url} className={props.btnClass}>{props.buttonText}</a>
        </div>
       
        </>
    );
}

export default Hero;