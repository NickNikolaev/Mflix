import { Switch, Route, Redirect } from 'react-router-dom';

import { HOME_ENDPOINT } from '../../services/api/homeEndpoints';
import Home from '../../components/home/Home';

import authController from '../../controllers/authController';
import moviesController from '../../controllers/moviesController';

const AppRouter = () => (
    <Switch>
        {/* Home */}
        <Route exact path="/"> <Redirect to={HOME_ENDPOINT} /> </Route>
        <Route exact path={HOME_ENDPOINT} component={Home} />
        {/* Auth */}
        <Route path="/auth" component={authController} />
        {/* Movies */}
        <Route path="/movies" component={moviesController} />
    </Switch>
);

export default AppRouter;