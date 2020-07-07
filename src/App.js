import { React, BrowserRouter as Router, Switch, Route } from "libraries";
import { appRoutes } from "routes";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          {appRoutes.map((route, i) => (
            <Route {...route} key={i} />
          ))}
        </Switch>
      </Router>
    );
  }
}

export default App;
