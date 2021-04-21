import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../common/Form.css';
import './LoginForm.css';

import { REGISTER_ENDPOINT } from '../../../services/api/authEndpoints';
import loginModel from '../../../models/auth/loginModel';
import { loginUser } from '../../../actions/auth/login/loginActions';
import useFormManagement from '../../../hocs/useFormManagement';

const LoginForm = () => {
    const [inputFieldsElement, handleSubmit] = useFormManagement(loginModel, loginUser);

    return (
        <div className="form-wrapper">
            <form className="form" onSubmit={handleSubmit} >
                <h3 className="form-title">Existing User ?</h3>
                <p className="form-subtitle">
                    Sign in below. Don't have an account ?
                    <span>
                        <Link to={REGISTER_ENDPOINT}>Click Here</Link>
                    </span>
                </p>

                <div className="form-fields">
                    {inputFieldsElement}
                </div>

                <button className="btn form-btn">Login</button>
            </form>
        </div>
    );
};

LoginForm.propTypes = {
    form: PropTypes.shape({
        email: PropTypes.string.isRequired,
        password: PropTypes.string.isRequired,
    }).isRequired
};

export default LoginForm;