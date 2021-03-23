import { DataGrid } from '@material-ui/data-grid';


function DataTable({data}) {

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'company_name', headerName: 'Nosaukums', width: 175 },
        { field: 'reg_number', headerName: 'Reģ. nr', width: 175 },
      ];

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={data} columns={columns} pageSize={5} checkboxSelection />
    </div>
  );
}

export default DataTable
