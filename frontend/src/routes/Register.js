import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import RegisterForm from "../components/RegisterForm";

function Register() {
    return(
        <>
        <Navbar/>
        <Hero 
        cName="hero"
        // heroImg="https://assets.thehansindia.com/h-upload/2022/06/14/1600x960_1297801-education-system.jpg"
        // title= "Contact us"/
        ></Hero>
        <RegisterForm/>
        </>
    );
}

export default Register;