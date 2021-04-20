import { useState } from 'react';
import AxiosGet from "../axios/AxiosGet";
import Selectize from "../components/common/Selectize"
import Loader from "../components/common/Loader";
import ToPrint from "../components/ToPrint"


const Test = () => {
	const clients = AxiosGet('clients');
	const nextbox = AxiosGet('nextbox');
	const [clientID, setClientID] = useState('');

	const getValue = (e) => {
		const selectedValue = e.value
		setClientID(selectedValue)
	}


	return (
		<div>
			{clients.loading ? <Loader /> : <Selectize data={clients.data} onChange={getValue} />}
			{nextbox.loading ? <Loader /> : <ToPrint nextbox={nextbox.data} clientID={clientID} />}
		</div>
	)
}

export default Test