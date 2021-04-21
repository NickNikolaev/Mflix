import jwt from 'jsonwebtoken';
import { loginSuccess } from '../../actions/auth/authActionCreators';
import { AUTH_TOKEN, SECRET_KEY } from '../../config/config';

const isAuthenticatedMiddleware = store => next => action => {
    const token = sessionStorage.getItem(AUTH_TOKEN);

    if (token) {
        jwt.verify(token, SECRET_KEY, (error, decoded) => {
            const { _id, username, email } = decoded;
            const user = { _id, username, email };

            next(loginSuccess(user));
        });
    };

    next(action);
};

export default isAuthenticatedMiddleware;