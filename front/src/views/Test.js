import Selectize from "../components/common/Selectize"
import AxiosGet from "../axios/AxiosGet";
import Loader from "../components/BeatLoader";
import ToPrint from "../components/ToPrint"
//import InputField from "../components/common/InputField";
import { CSVLink } from "react-csv";

const Test = () => {
	const clients = AxiosGet('clients');
	const nextbox = AxiosGet('nextbox');

	return (
		<div>
			{clients.loading ? <Loader /> : <Selectize data={clients.data} />}
			{nextbox.loading ? <Loader /> : <ToPrint nextbox={nextbox.data} />}
			{clients.loading ? <Loader /> : <CSVLink data={clients.data}>Download me</CSVLink>}
		</div>
	)
}

export default Test