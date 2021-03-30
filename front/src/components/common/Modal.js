import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useState } from 'react';
import AxiosPost from "../../axios/AxiosPost";

const Modal = ({ btnText, cancel, save, dialogTitle }) => {
	const [open, setOpen] = useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const [client_id, setClientId] = useState('');
	const [box_number, setBoxAmount] = useState('');

	const handleGetClientId = (event) => setClientId(event.target.value);
	const handleGetBoxAmount = (event) => setBoxAmount(event.target.value);

	const handleSave = async () => {
		await AxiosPost('boxes', {
			client_id,
			box_number,
			// print_date
		});
		// setNosaukums('');
		// setRegNr('');
		setOpen(false);
	}

	return (
		<div>
			<Button variant="outlined" color="primary" onClick={handleClickOpen}>
				{btnText}
			</Button>
			<Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
				<DialogTitle id="form-dialog-title">{dialogTitle}</DialogTitle>
				<DialogContent>
					<TextField
						required
						onChange={handleGetClientId}
						value={client_id}
						autoFocus
						margin="dense"
						id="company_name"
						label="Uzņēmuma nosaukums"
						fullWidth
					/>
					<TextField
						required
						onChange={handleGetBoxAmount}
						value={box_number}
						margin="dense"
						id="client_id"
						label="Uzlīmju skaits"
						type="number"
						fullWidth
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} color="primary">
						{cancel}
					</Button>
					<Button onClick={handleSave} color="primary">
						{save}
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}

export default Modal