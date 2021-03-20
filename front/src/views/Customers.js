import CustomerTable from "../components/CustomerTable";
// import { Button } from 'react-bootstrap'
// import { Link } from 'react-router-dom'
import Button from '../components/Button'

var onClickAction = function () {
    window.location.href = 'google.com';
 }

function Customers() {
    return (
        <div>
            <CustomerTable />
            {/* <Button variant="dark"><Link to="/">Go somewhere</Link></Button> */}
            <Button 
            color = "blue"
            text = "Click me"
            onClick={() => onClickAction()}
            />
        </div>
    )
}

export default Customers