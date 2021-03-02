import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import routes from './configs/constants/routes'

import { LandingPage } from './pages/LandingPage'
import { Login } from './pages/Login'
import { Tickets } from './pages/Tickets'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={routes.LANDING_PAGE}>
          <LandingPage />
        </Route>
        <Route exact path={routes.LOGIN}>
          <Login />
        </Route>
        <Route exact path={routes.TICKETS}>
          <Tickets />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
