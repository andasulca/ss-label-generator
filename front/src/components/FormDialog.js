import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useState }  from 'react';
import axios from 'axios';

function AxiosPost( uri, data ) {
  const response = async (resolve, reject) => {
      try {
          const url = `http://localhost:5000/${uri}`;
          await axios.post(url, data);
          resolve();
      } catch(e) {
          reject();
          alert('Something went wrong.');
      }
  }

  return new Promise(response);
}

function FormDialog({btnText, cancel, save}) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [nosaukums, setNosaukums] = useState('');
  const [reg_nr, setRegNr] = useState('');

  const handleNosaukumsChange = (event) => setNosaukums(event.target.value);
  const handleRegNrChange = (event) => setRegNr(event.target.value);

  const handleSave = async () => {
    await AxiosPost('klienti', {
        nosaukums,
        reg_nr
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
            onChange = {handleNosaukumsChange}
            value = {nosaukums}
            autoFocus
            margin="dense"
            id="nosaukums"
            label="Uzņēmuma nosaukums"
            fullWidth
          />
          <TextField
            required
            onChange = {handleRegNrChange}
            value = {reg_nr}
            margin="dense"
            id="reg_nr"
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