import './App.css';
import React, {useEffect, useRef, useState} from 'react';
import Loader from "./components/loader/loader";
import Header from "./components/header/header";
import LandingPage from "./pages/landing-page/landing-page";
import AboutPage from "./pages/about-page/about";
import Social from "./components/social/social";
import Mail from "./components/mail/mail";
import Experience from "./pages/experience-page/experience";
import Work from "./pages/work-page/work";

function App() {
    const [loaderCompleted, setLoaderCompleted] = useState(false);
    const appRef = useRef(null)
    const [isBlurred, setIsBlurred] = useState(false);

    const handleScroll = () => {
        const navigationBar = document.getElementById('navbar');
        const navigationBarRect = navigationBar.getBoundingClientRect();

        // Check if the navigation bar comes in contact with other content
        if (navigationBarRect.bottom >= 0) {
            setIsBlurred(true);

        } else {
            setIsBlurred(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const handleLoaderComplete = () => {
        setLoaderCompleted(true);
    };

    const handleAnimationEnd = () => {
        appRef.current.classList.remove("animate");
    };

    return (
        <div ref={appRef} className={`App${loaderCompleted ? ' animate' : ''}`} onAnimationEnd={handleAnimationEnd}>
            {loaderCompleted && <Header isBlurred={isBlurred}/>}
            <Loader onLoaderComplete={handleLoaderComplete}/>
            {loaderCompleted && (
                <>
                    <Social/>
                    <Mail/>
                    <LandingPage/>
                    <AboutPage/>
                    <Experience/>
                    <Work/>
                </>
            )}
        </div>
    );
}

export default App;
