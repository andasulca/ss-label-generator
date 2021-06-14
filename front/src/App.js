import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Header from "./components/Header";
import Customers from "./views/Customers";
import Boxes from "./views/Boxes";
import Test from "./views/Test";
import NewLabels from "./views/NewLabels";
import Labels from "./views/Labels";

const App = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="App">
      <Router>
        <Header />
        {isAuthenticated && (
          <div className="container">
            <Switch>
              <Route exact path="/">
                <Customers />
              </Route>
              <Route path="/boxes">
                <Boxes />
              </Route>
              <Route path="/test">
                <Test />
              </Route>
              <Route path="/newlabels">
                <NewLabels />
              </Route>
              <Route path="/labels">
                <Labels />
              </Route>
            </Switch>
          </div>
        )}
      </Router>
    </div>
  );
};

export default App;
