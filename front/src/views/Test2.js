import React from "react";
import EditTableTest from "../components/EditTableTest";
import App from "../context/App"
import Display from "../context/Display";

export const JediContext = React.createContext();

const Test2 = () => {
    return (
        <div>
            <JediContext.Provider value={"Luke"}>
                <Display />
            </JediContext.Provider>
            <App />
            <EditTableTest />
        </div>
    )
}

export default Test2