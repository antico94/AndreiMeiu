import './App.css';
import { useState } from 'react';
import Loader from "./components/loader/loader";
import Header from "./components/header/header";
import Introduction from "./components/introduction/introduction";
import Social from "./components/social/social";
import Mail from "./components/mail/mail";

function App() {
    const [loaderCompleted, setLoaderCompleted] = useState(false);

    const handleLoaderComplete = () => {
        setLoaderCompleted(true);
    };

    return (
        <div className={`App${loaderCompleted ? ' animate' : ''}`}>
            {loaderCompleted && <Header/>}
            <Loader onLoaderComplete={handleLoaderComplete}/>
            {loaderCompleted && (
                <>
                    <Introduction/>
                    <Social/>
                    <Mail/>
                </>
            )}
        </div>
    );
}

export default App;
