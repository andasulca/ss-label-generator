import App from "../context/App"
import React from "react";
import Display from "../context/Display";

export const JediContext = React.createContext();

const Test2 = () => {
    return (
        <div>
            <JediContext.Provider value={"Luke"}>
                <Display />
            </JediContext.Provider>
            <App />
        </div>
    )
}

export default Test2