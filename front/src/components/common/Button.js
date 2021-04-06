import Button from '@material-ui/core/Button';

const Btn = ({ text, color, variant, onClick }) => {
    return (
        <Button variant={variant} color={color} onClick={onClick}>
            {text}
        </Button>
    )
}

export default Btn