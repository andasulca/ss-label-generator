import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarExport,
} from "@material-ui/data-grid";

function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}

const Table = ({ rows, columns, pageSize }) => {
  return (
    <div className="table">
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={pageSize}
        components={{
          Toolbar: CustomToolbar,
        }}
      />
    </div>
  );
};

export default Table;
