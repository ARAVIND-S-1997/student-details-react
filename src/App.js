// other file imports
import './App.css';
import { Login } from './components/loginComponent';
import { Signup } from './components/signupComponent';
import { Welcomedashboard } from './components/welcomeDashboard';

// packages amd libraries imports
import { Route, Switch } from "react-router-dom"


function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route exact path="/signup">
        <Signup />
      </Route>
      <Route exact path="/welcomedashboard">
        <Welcomedashboard />
      </Route>
    </Switch>
  );
}

export default App;
