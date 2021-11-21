import AxiosGet from "../axios/AxiosGet";
import AxiosPost from "../axios/AxiosPost";
import Button from "../components/common/Button";
import InputField from "../components/common/InputField";
import Selectize from "../components/common/Selectize";
import Loader from "../components/common/Loader";
import TextField from "@material-ui/core/TextField";

import { useState } from "react";
import ToPrint from "../components/ToPrint";


const NewLabels = () => {
  const clients = AxiosGet("clients");
  const nextbox = AxiosGet("nextbox");
  const [clientID, setClientID] = useState("");
  const [topicBox, setTopicBox] = useState("");

  const getValue = (e) => {
    const selectedValue = e.value;
    setClientID(selectedValue);
  };

  const handleChangeTopicBox = (e) => {
    const selectedValue = e.target.value;
    setTopicBox(selectedValue);
  };

  
  // return (
  //   <div className="mt-2">
  //     {clients.loading ? <Loader /> : <Selectize data={clients.data} />}
  //     <div className="col">
  //       <div className="row mt-2">
  //         <InputField label={"Uzlīmju skaits"} />
  //       </div>
  //       <div className="row mt-2">
  //         <Button
  //           text={"Izdrukāt svītrkodus"}
  //           color={"primary"}
  //           variant="outlined"
  //         />
  //       </div>
  //     </div>
  //   </div>
  // );

  const handleSaveBoxes = async () => {
    await AxiosPost("saveBoxes", {
      client_id: clientID,
      box_count: topicBox
    });
  };



  return (
    <div>
      {clients.loading ? (
        <Loader />
      ) : (
        <Selectize data={clients.data} onChange={getValue} />
      )}
         <div className="row mt-2">
            <Button
              text={"Saglabāt svītrkodus"}
              color={"primary"}
              variant="outlined"
              onClick={handleSaveBoxes}
            />
         </div> 

         <TextField
          name="topicBox"
          onChange={handleChangeTopicBox}
          label={"Uzlīmju skaits"}
        />   

      {nextbox.loading ? (
        <Loader />
      ) : (
        <ToPrint 
          label={"Uzlīmju skaits"} 
          nextbox={nextbox.data[0].nextbox} 
          clientID={clientID}
          topicBox={topicBox} 
        />
      )}
    </div>
  );




};

export default NewLabels;
