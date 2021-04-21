import { emailInputFieldData, passwordInputFieldData } from './common/inputFieldsData';
import FormInputField from '../../components/auth/common/FormInputField';

export const inputFieldsData = {
    email: emailInputFieldData,
    password: passwordInputFieldData
};

export const defaultState = {
    email: '',
    password: '',
};

export default {
    inputFieldsData,
    defaultState,
    InputField: FormInputField
};