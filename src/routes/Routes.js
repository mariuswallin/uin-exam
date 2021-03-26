import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from '../components/Navigation';
import DefaultLayout from '../layouts/DefaultLayout';
import Home from '../pages/Home';
import Trainings from '../pages/Trainings';

const Routes = () => (
  <Router>
    <Navigation />
    <DefaultLayout>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/trening">
          <Trainings />
        </Route>
      </Switch>
    </DefaultLayout>
  </Router>
);

export default Routes;
