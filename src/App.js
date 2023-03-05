import './App.css';
import React, {useRef, useState} from 'react';
import Loader from "./components/loader/loader";
import Header from "./components/header/header";
import LandingPage from "./pages/landing-page/landing-page";
import AboutPage from "./pages/about-page/about";
import Social from "./components/social/social";
import Mail from "./components/mail/mail";

function App() {
    const [loaderCompleted, setLoaderCompleted] = useState(false);
    const appRef = useRef(null)
    const handleLoaderComplete = () => {
        setLoaderCompleted(true);
    };

    const handleAnimationEnd = () => {
        appRef.current.classList.remove("animate");
    };

    return (
        <div ref={appRef} className={`App${loaderCompleted ? ' animate' : ''}`} onAnimationEnd={handleAnimationEnd}>
            {loaderCompleted && <Header/>}
            <Loader onLoaderComplete={handleLoaderComplete}/>
            {loaderCompleted && (
                <>
                    <Social/>
                    <Mail/>
                    <LandingPage/>
                    <AboutPage/>
                </>
            )}
        </div>
    );
}

export default App;
