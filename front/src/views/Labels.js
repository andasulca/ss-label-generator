import Btn from "../components/common/Btn";
import InputField from "../components/common/InputField";

const Labels = () => {
  return (
    <div>
      <div className="col">
        <div className="row mt-2">
          <InputField label={"Kastes numurs no"} />
        </div>
        <div className="row mt-2">
          <InputField label={"Kastes numurs līdz"} />
        </div>
        <div className="row mt-2">
          <Btn text={"Izdrukāt svītrkodus"} color={"primary"} />
        </div>
      </div>
    </div>
  );
};

export default Labels;
