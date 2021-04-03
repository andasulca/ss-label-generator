import Button from '@material-ui/core/Button';

const Btn = ({ text, color }) => {
  return (
    <Button variant="outlined" color={color}>
      {text}
    </Button>
  );
};

export default Btn;
