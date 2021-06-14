import AxiosGet from "../axios/AxiosGet";
import Table from "../components/common/Table";
import Loader from "../components/common/Loader";

const Boxes = () => {
  const boxes = AxiosGet("boxeswithclients");

  const columns = [
    { field: "id", headerName: "Kastes numurs", width: 175 },
    { field: "client_id", headerName: "Klienta numurs", width: 175 },
    { field: "company_name", headerName: "Nosaukums", width: 175 },
    { field: "print_date", headerName: "Izdrukāts", width: 175 },
  ];

  const row = boxes.data;

  return (
    <div>
      {boxes.loading ? (
        <Loader />
      ) : (
        <Table rows={row} columns={columns} pageSize={10} />
      )}
    </div>
  );
};

export default Boxes;
