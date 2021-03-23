import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from "./components/Header";
import Customers from "./views/Customers";
import { useState, useEffect }  from 'react';
import axios from 'axios';
import Boxes from './views/Boxes';
import Test from './views/Test';

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
        const url = `http://localhost:5000/get/${uri}`;

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
	const clients = useAxiosGet('clients');
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
                        <Route path="/boxes">
                            <Boxes 
                            clients = {clients}/>
                        </Route>
                        <Route path="/test">
                            <Test />
                        </Route>
					</Switch>
				</div>
			</Router>
		</div>
	);
}

export default App;
