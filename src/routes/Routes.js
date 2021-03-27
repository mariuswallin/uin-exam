import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from '../components/Navigation';
import DefaultLayout from '../layouts/DefaultLayout';
import Booking from '../pages/Booking';
import GroupClass from '../pages/GroupClass';
import GroupTraining from '../pages/GroupTraining';
import GroupClassRefactored from '../pages/GroupClassRefactored';

import Home from '../pages/Home';
import Trainings from '../pages/Trainings';
import TrainingsRefactored from '../pages/TrainingsRefactored';

const Routes = () => (
  <Router>
    <Navigation />
    <DefaultLayout>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        {/* <Route exact path="/trening">
          <Trainings />
        </Route> */}
        <Route exact path="/trening">
          <TrainingsRefactored />
        </Route>
        <Route exact path="/booking">
          <Booking />
        </Route>
        <Route exact path="/gruppetrening">
          <GroupTraining />
        </Route>
        <Route exact path="/gruppetrening/:slug">
          <GroupClassRefactored />
        </Route>
        {/* <Route exact path="/gruppetrening/:slug">
          <GroupClass />
        </Route> */}
      </Switch>
    </DefaultLayout>
  </Router>
);

export default Routes;
