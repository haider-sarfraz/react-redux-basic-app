import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { useSelector } from 'react-redux'

import routes from './configs/constants/routes'
import { LandingPage } from './pages/LandingPage'
import { Tickets } from './pages/Tickets'
import { Login } from './pages/Login'

function App() {
  
  const { isAuthenticated } = useSelector((state:any) => state.auth)

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
          {
            (isAuthenticated)
            ? <Tickets />
            : <Login />
          }
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
