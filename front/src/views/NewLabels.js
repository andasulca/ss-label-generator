import Btn from "../components/common/Btn";
import InputField from "../components/common/InputField";
import Selectize from "../components/common/Selectize";
import AxiosGet from "../axios/AxiosGet";
import Loader from "../components/BeatLoader";

const NewLabels = () => {
	const clients = AxiosGet("clients");
	return (
		<div className="mt-2">
			{clients.loading ? <Loader /> : <Selectize data={clients.data} />}
			<div className="col">
				<div className="row mt-2">
					<InputField label={"Uzlīmju skaits"} />
				</div>
				<div className="row mt-2">
					<Btn text={"Izdrukāt svītrkodus"} color={"primary"} />
				</div>
			</div>
		</div>
	);
};

export default NewLabels;
