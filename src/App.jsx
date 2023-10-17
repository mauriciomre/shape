import { useState } from "react";
import NavBar from "./components/navBar";
import Main from "./components/Main";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <NavBar />
            <Main />
        </>
    );
}

export default App;
