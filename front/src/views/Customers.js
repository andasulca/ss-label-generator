import Loader from "../components/common/BeatLoader";
import AddNewCustomer from "../components/AddNewCustomer";
import Table from "../components/common/Table"

const Customers = ({ clients }) => {
	const columns = [
		{ field: "id", headerName: "ID", width: 70 },
		{ field: "company_name", headerName: "Nosaukums", width: 175 },
		{ field: "reg_number", headerName: "Reģ. nr", width: 175 },
	];

	const row = clients.data

	return (
		<div>
			{clients.loading ? <Loader /> : <Table rows={row} columns={columns} pageSize={10} />}
			<AddNewCustomer btnText="Pievienot klientu" cancel="Atcelt" save="saglabāt" />
		</div>
	);
}

export default Customers;
