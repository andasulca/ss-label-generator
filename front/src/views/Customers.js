import AxiosGet from "../axios/AxiosGet";
import Loader from "../components/common/Loader";
import AddNewCustomer from "../components/AddNewCustomer";
import Table from "../components/common/Table"
import Button from "../components/common/Button"

const Customers = () => {
	const clients = AxiosGet('clients');
	const columns = [
		{ field: "id", headerName: "ID", width: 70 },
		{ field: "company_name", headerName: "Nosaukums", width: 175 },
		{ field: "reg_number", headerName: "Reģ. nr", width: 175 },
		{ field: "edit", headerName: "labot", width:100 , 
			renderCell: (params) => (
					<AddNewCustomer 
						reg_number={params.row.reg_number} 
						company_name={params.row.company_name} 
						id={params.row.id}
						buttonTitle="Labot"
						modalTitle="Labot klientu"
						/>
			),
		}
	];

	const row = clients.data

	return (
		<div>
			{clients.loading ? <Loader /> : <Table rows={row} columns={columns} pageSize={10} />}
			<AddNewCustomer 	
			buttonTitle="Pievienot jaunu klientu"
			modalTitle="Pievienot jaunu klientu"
			/>
		</div>
	);
}

export default Customers;
