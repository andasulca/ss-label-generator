import { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import AxiosPost from "../axios/AxiosPost";
import Button from './common/Button';

const FormDialog = () => {
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
			<Button
				variant="outlined"
				color="primary"
				onClick={handleClickOpen}
				text="Pievienot jaunu klientu"
			/>
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
					<Button
						variant="outlined"
						color="primary"
						onClick={handleClose}
						text="Atcelt"
					/>
					<Button
						variant="outlined"
						color="primary"
						onClick={handleSave}
						text="Saglabāt"
					/>
				</DialogActions>
			</Dialog>
		</div>
	);
}

export default FormDialog