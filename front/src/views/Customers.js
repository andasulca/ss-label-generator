import CustomerTable from "../components/CustomerTable";
import Button from "../components/Button";
import Loader from "../components/BeatLoader";
import FormDialog from "../components/FormDialog";
import DataTable from "../components/DataTable";

const onClickAction = () => {
  window.location.href = "google.com";
};

function Customers({ clients }) {
  console.log(clients);
  return (
    <div>
      {clients.loading ? <Loader /> : <CustomerTable data={clients.data} />}
      <Button classname="great-btn" text="Pievienot klientu" onClick={onClickAction} />
      {clients.loading ? <Loader /> : <DataTable data={clients.data} />}
      <FormDialog btnText="Pievienot klientu" cancel="Atcelt" save="saglabāt"/>
    </div>
  );
}

export default Customers;
