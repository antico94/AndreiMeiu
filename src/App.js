import './App.css';
import Loader from "./components/loader/loader";
import Header from "./components/header/header";
import Introduction from "./components/introduction/introduction";
import Social from "./components/social/social";
import Mail from "./components/mail/mail";

function App() {
    return (
        <div className="App">
            <Header/>
            {/*<Loader/>*/}
            <Introduction/>
            <Social/>
            <Mail/>
        </div>
    );
}

export default App;
