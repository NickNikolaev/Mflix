import '../common/FormInputField.css';

const FormInputField = ({ type, name, placeholder, onChange, value, key, iClassName }) => (
    <label>
        <input
            type={type}
            name={name}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            key={key}
            required
            autoComplete="off"
        />
        <i class={iClassName}></i>
    </label>
);

export default FormInputField;