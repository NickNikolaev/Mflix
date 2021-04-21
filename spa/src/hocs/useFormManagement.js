import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

const useFormManagement = ({ defaultState, inputFieldsData, InputField }, submitter) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [form, setForm] = useState({ ...defaultState });

    const handleSubmit = event => {
        event.preventDefault();
        // Clear Input Fields
        setForm({ ...defaultState });
        // Dispatch Action
        const action = submitter(form, history);
        dispatch(action);
    };

    const handleChange = event => {
        const { name, value } = event.target;

        setForm({ ...form, [name]: value });
    };

    const inputFieldsElement = Object.keys(form).map((key, index) =>
        <InputField
            {...inputFieldsData[key]}
            onChange={event => handleChange(event)}
            value={form[key]}
            key={index}
        />
    );

    return [
        inputFieldsElement,
        handleSubmit,
        setForm,
    ];
};


export default useFormManagement;