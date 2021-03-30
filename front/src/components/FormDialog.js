import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useState } from 'react';
import axios from 'axios';

const AxiosPost = (uri, data) => {
	const response = async (resolve, reject) => {
		try {
			const url = `http://localhost:5000/post/${uri}`;
			await axios.post(url, data);
			resolve();
		} catch (e) {
			reject();
			alert('Something went wrong.');
		}
	}

	return new Promise(response);
}

function FormDialog({ btnText, cancel, save }) {
	const [open, setOpen] = useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const [company_name, setNosaukums] = useState('');
	const [reg_number, setRegNr] = useState('');

	const handleNosaukumsChange = (event) => setNosaukums(event.target.value);
	const handleRegNrChange = (event) => setRegNr(event.target.value);

	const handleSave = async () => {
		await AxiosPost('clients', {
			company_name,
			reg_number
		});
		setNosaukums('');
		setRegNr('');
		setOpen(false);
	}

	return (
		<div>
			<Button variant="outlined" color="primary" onClick={handleClickOpen}>
				{btnText}
			</Button>
			<Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
				<DialogTitle id="form-dialog-title">Pievienot jaunu klientu</DialogTitle>
				<DialogContent>
					<TextField
						required
						onChange={handleNosaukumsChange}
						value={company_name}
						autoFocus
						margin="dense"
						id="company_name"
						label="Uzņēmuma nosaukums"
						fullWidth
					/>
					<TextField
						required
						onChange={handleRegNrChange}
						value={reg_number}
						margin="dense"
						id="reg_number"
						label="Reģistrācijas numurs"
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

export default FormDialog