import { useState } from "react";
import NavBar from "./components/navBar";
import Main from "./components/Main";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <div className="background bg-dark"></div>
            <div className="bg-dark">
                <NavBar />
                <Main />
            </div>
        </>
    );
}

export default App;
