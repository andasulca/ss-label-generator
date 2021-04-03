import { DataGrid } from '@material-ui/data-grid';

const Table = ({ rows, columns, pageSize }) => {
  return (
    <div style={{ height: 600, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={pageSize} />
    </div>
  );
};

export default Table;
