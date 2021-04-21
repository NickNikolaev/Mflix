import jwt from 'jsonwebtoken';
import { AUTH_TOKEN, SECRET_KEY } from '../../config/config';

const getAuthData = () => {
    let token = sessionStorage.getItem(AUTH_TOKEN);

    return jwt.verify(token, SECRET_KEY, (error, decoded) => decoded);
};

export default getAuthData;