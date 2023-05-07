import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
// import Hero2 from "../components/Hero2"
import { useState, useEffect } from 'react';



function Home() {
    return (
        <div>
            
            <>
                <Navbar />
                <Hero
                    cName="hero"
                    heroImg="https://www.smilefoundationindia.org/blog/wp-content/uploads/2022/11/142875012_4213934451963824_4908626115809418460_o-1024x768.jpg"
                    title="Welcome"
                    text="Your Journey begins here"
                    buttonText="VISIT HERE"
                    url="/"
                    btnClass="show"
                />
                {/* <Hero2 username="user" /> */}
            </>
            <div>
      {/* {user && (
        <>

        <Navbar/>
        <Hero 
        cName="hero"
        heroImg="https://www.smilefoundationindia.org/blog/wp-content/uploads/2022/11/142875012_4213934451963824_4908626115809418460_o-1024x768.jpg"
        title="Welcome"
        text="Your Journey begins here"
        buttonText="VISIT HERE"
        url="/Register"
        btnClass="show"
        />
        <Hero2 username="user"/>

        </>
      )} */}
    </div>
        </div>
    );
}

export default Home;