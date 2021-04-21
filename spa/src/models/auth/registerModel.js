import { usernameInputFieldData, emailInputFieldData, passwordInputFieldData } from './common/inputFieldsData';
import FormInputField from '../../components/auth/common/FormInputField';

export const inputFieldsData = {
    username: usernameInputFieldData,
    email: emailInputFieldData,
    password: passwordInputFieldData,
};

export const defaultState = {
    username: '',
    email: '',
    password: '',
};

export default {
    inputFieldsData,
    defaultState,
    InputField: FormInputField
};