import { Switch, Route } from 'react-router-dom';

import RegisterForm from '../components/auth/Register/RegisterForm';
import LoginForm from '../components/auth/Login/LoginForm';
import Logout from '../components/auth/Logout/Logout';
import { REGISTER_ENDPOINT, LOGIN_ENDPOINT, LOGOUT_ENDPOINT } from '../services/api/authEndpoints';

const authController = () => (
    <Switch>
        <Route exact path={REGISTER_ENDPOINT} component={RegisterForm} />
        <Route exact path={LOGIN_ENDPOINT} component={LoginForm} />
        <Route exact path={LOGOUT_ENDPOINT} component={Logout} />
    </Switch>
);

export default authController;