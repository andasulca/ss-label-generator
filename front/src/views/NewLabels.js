import AxiosGet from "../axios/AxiosGet";
import Button from "../components/common/Button";
import InputField from "../components/common/InputField";
import Selectize from "../components/common/Selectize";
import Loader from "../components/common/Loader";

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
					<Button text={"Izdrukāt svītrkodus"} color={"primary"} />
				</div>
			</div>
		</div>
	);
};

export default NewLabels;
