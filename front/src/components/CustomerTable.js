import { Table } from 'react-bootstrap'

function CustomerTable({data}) {
    const items = [];
    if( data != null) {

    for (const [index, value] of Object.entries(data)) {
        items.push(<tr key={value.id}><td>{value.id}</td><td>{value.nosaukums}</td><td>{value.reg_nr}</td></tr>)
      }
    }
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nosaukums</th>
                    <th>Reģ. nr</th>
                </tr>
            </thead>
            <tbody>
                {items}
            </tbody>
        </Table>
    )
}

export default CustomerTable