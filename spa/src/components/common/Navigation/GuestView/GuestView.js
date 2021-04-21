import { Link } from 'react-router-dom';
import { LOGIN_ENDPOINT, REGISTER_ENDPOINT } from '../../../../services/api/authEndpoints';

const GuestView = () => (
    <div className="navigation-user-guest">
        <span><Link to={LOGIN_ENDPOINT} className="btn">LOG IN</Link></span>
        <span><Link to={REGISTER_ENDPOINT} className="btn">REGISTER</Link></span>
    </div>
);

export default GuestView;