import { Link } from 'react-router-dom';
import './AuthView.css';
import { LOGOUT_ENDPOINT } from '../../../../services/api/authEndpoints';
import { ADD_MOVIE_ENDPOINT } from '../../../../services/api/movieEndpoints';

const AuthView = ({ username }) => (
    <div className="navigation-user-auth">
        <div>
            <span className="navigation-user-auth-greeting">Hello, {username}</span>
            <Link to={LOGOUT_ENDPOINT} className="btn">LOGOUT</Link>
        </div>

        <Link id="navigation-user-auth-add-movie" to={ADD_MOVIE_ENDPOINT}>ADD MOVIE</Link>
    </div>
);

export default AuthView;