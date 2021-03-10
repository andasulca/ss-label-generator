import CustomerTable from "../components/CustomerTable";
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Customers() {
    return (
        <div>
            <CustomerTable />
            <Button variant="dark"><Link to="/">Go somewhere</Link></Button>
        </div>
    )
}

export default Customers