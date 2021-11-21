import InputField from "../components/common/InputField";
import ToPrint from "../components/ToPrint";
import { useState, useEffect } from "react";
import AxiosGet from "../axios/AxiosGet";
import AxiosPost from "../axios/AxiosPost";
import Button from "../components/common/Button";

const Labels = () => {
  const [boxID, setBoxID] = useState(0);
  const getValue = (e) => {
    const selectedValue = e.target.value;
    setBoxID(Number(selectedValue));
  };

  const [boxCount, setBoxCount] = useState(0);
  const getBoxCount = (e) => {
    const selectedValue = e.target.value;
    setBoxCount(Number(selectedValue));
  };

  const [boxes, setBoxes] = useState([]);

  useEffect(() => {
      boxes = AxiosGet("getinfo", {
        boxID : boxID,
        box_count: boxCount
      });
      setBoxes(boxes);
    }, [boxID, boxCount]);

  //const nextbox = [{nextbox:3}]
  return (
    <div>
      <div className="col">
        <div className="row mt-2">
          <InputField label={"Kastes numurs no"} onChange={getValue}/>
        </div>
        <div className="row mt-2">
          <InputField label={"Kastu skaits"} onChange={getBoxCount}/>
        </div>

        <Button
            variant="outlined"
            color="primary"
            //onClick={getBoxes}
            text="izgūt kastes"
          />
        {/* <div className="row mt-2">
          <InputField label={"Kastes numurs līdz"} />
        </div> */}
        <ToPrint nextbox={[{nextbox:boxID, testprop:99}]} 
        clientID={0} 
        boxID={boxID}
        />
      </div>
    </div>
  );
};

export default Labels;
