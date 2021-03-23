import Selectize from "../components/common/Selectize"
import AxiosGet from "../axios/AxiosGet";
import Loader from "../components/BeatLoader";
import ToPrint from "../components/ToPrint"

const Test = () => {
    const clients = AxiosGet('clients');
    return (
        <div>
            {clients.loading ? <Loader /> : <Selectize data={clients.data}/>}
            <ToPrint />
        </div>
    )
}

export default Test