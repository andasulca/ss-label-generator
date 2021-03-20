import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from "./components/Header";
import Customers from "./views/Customers";
import { useState, useEffect }  from 'react';
import axios from 'axios';

function useAxiosGet(uri) {
    const [request, setRequest] = useState({
        loading: true,
        data: null,
    });

    useEffect(() => {
        setRequest({
            loading: true,
            data: null,
        });
        const url = `http://localhost:5000/${uri}`;

        axios.get(url)
            .then((response) => {
                setRequest({
                    loading: false,
                    data: response.data,
                });
            }).catch(() => {
                alert('Something went wrong.');
                setRequest({
                    loading: false,
                    data: null,
                });
            });
    }, [uri]);
    

    return request;
}

function App() {
	const clients = useAxiosGet('Klienti');
	console.log(clients)
	return (
		<div className="App">
			<Router >
				<Header />
				<div className="container">
					<Switch>
						<Route exact path="/">
							<Customers
							clients = {clients}/>
						</Route>
					</Switch>
				</div>
			</Router>
		</div>
	);
}

export default App;
