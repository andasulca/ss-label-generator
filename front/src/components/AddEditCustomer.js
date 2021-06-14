import { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import AxiosPost from "../axios/AxiosPost";
import Button from "./common/Button";
import InputField from "./common/InputField";

const AddNewCustomer = (props) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [company_name, setNosaukums] = useState(
    typeof props.company_name !== "undefined" ? props.company_name : ""
  );
  const [reg_number, setRegNr] = useState(
    typeof props.reg_number !== "undefined" ? props.reg_number : ""
  );

  const handleNosaukumsChange = (event) => setNosaukums(event.target.value);
  const handleRegNrChange = (event) => setRegNr(event.target.value);
  const refreshPage = () => {
    window.location.reload(false);
  };

  const handleSave = async () => {
    await AxiosPost("clients", {
      company_name,
      reg_number,
      id: props.id,
    });
    setOpen(false);
    refreshPage();
  };

  return (
    <div>
      <Button
        variant="outlined"
        color="primary"
        onClick={handleClickOpen}
        text={props.buttonTitle}
      />
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">{props.modalTitle}</DialogTitle>
        <DialogContent>
          <InputField
            onChange={handleNosaukumsChange}
            value={company_name}
            autoFocus={true}
            margin="dense"
            id="company_name"
            label="Uzņēmuma nosaukums"
          />
          <InputField
            onChange={handleRegNrChange}
            value={reg_number}
            margin="dense"
            id="reg_number"
            label="Reģistrācijas numurs"
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
};

export default AddNewCustomer;
