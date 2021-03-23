import AxiosGet from "../axios/AxiosGet";
import Table from "../components/common/Table"
import Loader from "../components/BeatLoader";

const Boxes = () => {
    const clients = AxiosGet('clients');
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'company_name', headerName: 'Nosaukums', width: 175 },
        { field: 'reg_number', headerName: 'Reģ. nr', width: 175 },
      ];

    const row = clients.data
      
    return (
        <div>
           {clients.loading ? <Loader /> :  <Table rows={row} columns={columns} pageSize={5}/> }
        </div>
    )
}

export default Boxes;