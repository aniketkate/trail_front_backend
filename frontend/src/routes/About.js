import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

import AboutUs from "../components/AboutUs";

function About() {
    return(
        <>
        <Navbar/>
        <Hero 
        cName="hero1"
        heroImg="https://media.istockphoto.com/id/1263424631/photo/e-learning-online-education-or-internet-encyclopedia-concept-open-laptop-and-book-compilation.jpg?s=612x612&w=0&k=20&c=2xih46TXLwHnvgU5FaY9FRRc3F62MpzL__S8O6v2jRU="
        title= "ABOUT"/>
        <AboutUs />
        
        
        
        </>
    );
}

export default About;