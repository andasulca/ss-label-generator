import Selectize from "../components/common/Selectize"
import AxiosGet from "../axios/AxiosGet";
import Loader from "../components/BeatLoader";
import ToPrint from "../components/ToPrint"
import InputField from "../components/common/InputField";
import { CSVLink } from "react-csv";

const csvData = [
    ["firstname", "lastname", "email"],
    ["Ahmed", "Tomi", "ah@smthing.co.com"],
    ["Raed", "Labes", "rl@smthing.co.com"],
    ["Yezzi", "Min l3b", "ymin@cocococo.com"]
  ];

const Test = () => {
    const clients = AxiosGet('clients');

    return (
        <div>
            {clients.loading ? <Loader /> : <Selectize data={clients.data}/>}
            <InputField label={"Uzlīmju skaits"} />
            <ToPrint />
            <CSVLink data={csvData}>Download me</CSVLink>;
        </div>
    )
}

export default Test