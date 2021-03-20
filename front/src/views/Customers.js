import CustomerTable from '../components/CustomerTable';
import Button from '../components/Button';

const onClickAction = () => {
  window.location.href = 'google.com';
};

function Customers({ clients }) {
  console.log(clients);
  return (
    <div>
      {clients.loading ? 'Loading' : <CustomerTable data={clients.data} />}

      <Button classname="great-btn" text="Click me" onClick={onClickAction} />
    </div>
  );
}

export default Customers;
