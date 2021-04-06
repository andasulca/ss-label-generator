import Button from "../components/common/Button";
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
					<Button text={"Izdrukāt svītrkodus"} color={"primary"} variant="outlined" />
				</div>
			</div>
		</div>
	);
};

export default Labels;
