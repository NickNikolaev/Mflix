import PropTypes from 'prop-types';
import '../common/Form.css';

import registerModel from '../../../models/auth/registerModel';
import { registerUser } from '../../../actions/auth/register/registerActions';
import useFormManagement from '../../../hocs/useFormManagement';

const RegisterForm = () => {
    const [inputFieldsElement, handleSubmit] = useFormManagement(registerModel, registerUser);

    return (
        <div className="form-wrapper">
            <form className="form" onSubmit={handleSubmit}  >
                <h3 className="form-title">New User ?</h3>
                <p className="form-subtitle">Make an account by filling out the form below.</p>

                <div className="form-fields">
                    {inputFieldsElement}
                </div>

                <button className="btn form-btn" >Register</button>
            </form>
        </div>
    );
};

RegisterForm.propTypes = {
    form: PropTypes.shape({
        username: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        password: PropTypes.string.isRequired,
    })
};

export default RegisterForm;