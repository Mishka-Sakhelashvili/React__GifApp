import React from 'react';
import "./App.css";

///////////////Components///////////////
import Random from "./components/Random";
import Tag from "./components/Tag";
///////////////Components///////////////

const App = () => {
    return (
        <div>
            <h1>Gif App</h1>
            <div className="main-container">
                <Random />
                <Tag />
            </div>
        </div>
    );
};

export default App;
