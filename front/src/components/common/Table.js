import { DataGrid } from '@material-ui/data-grid';

const Table = ({rows, columns, pageSize}) => {

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={pageSize} checkboxSelection />
    </div>
  );
}

export default Table;