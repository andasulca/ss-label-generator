import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from "./components/Header";
import Customers from "./views/Customers";

function App() {
	return (
		<div className="App">
			<Router >
				<Header />
				<div className="container">
					<Switch>
						<Route exact path="/">
							<Customers />
						</Route>
					</Switch>
				</div>
			</Router>
		</div>
	);
}

export default App;
