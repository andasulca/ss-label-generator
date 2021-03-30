import { useContext } from "react";
import { JediContext } from '../views/Test2'

const Display = () => {
    const value = useContext(JediContext);
    return <div>{value}, I am your Father.</div>;
}

export default Display