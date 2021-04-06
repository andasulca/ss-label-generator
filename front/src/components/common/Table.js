import { DataGrid } from '@material-ui/data-grid';

const Table = ({ rows, columns, pageSize }) => {

	return (
		<div className="table">
			<DataGrid rows={rows} columns={columns} pageSize={pageSize} checkboxSelection />
		</div>
	);
}

export default Table;