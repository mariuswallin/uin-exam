import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DefaultLayout from '../layouts/DefaultLayout';
import Home from '../pages/Home';

/**
 * Her har jeg laget en "rute" til "/" og bruker Home komponenten i pages mappen
 */

const Routes = () => (
  <Router>
    <DefaultLayout>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </DefaultLayout>
  </Router>
);

export default Routes;
