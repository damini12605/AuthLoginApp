import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from './components/Routing/PrivateRoute';
import Dashboard from './components/Screens/Dashboard';
import Loginpage from './components/Screens/Loginpage';
import Registerpage from './components/Screens/Registerpage';



const App = () => {
  return (
      <Router>
        <div className="app">
          <Switch>
            <PrivateRoute exact path="/" component={Dashboard} />
            <Route exact path="/login" component={Loginpage} />
            <Route exact path="/register" component={Registerpage} />
          </Switch>
        </div>
      </Router>
  );
}

export default App;
