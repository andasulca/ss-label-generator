import CustomerTable from "../components/CustomerTable";
import Button from "../components/Button";
import Loader from "../components/BeatLoader";

const onClickAction = () => {
  window.location.href = "google.com";
};

function Customers({ clients }) {
  console.log(clients);
  return (
    <div>
      {clients.loading ? <Loader /> : <CustomerTable data={clients.data} />}
      <Button classname="great-btn" text="Click me" onClick={onClickAction} />
    </div>
  );
}

export default Customers;
