import { HIDE_NOTIFICATION, SHOW_NOTIFICATION } from '../../actions/notification/notificationActionTypes';

const defaultState = {
    type: '',
    message: ''
};

const notificationReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SHOW_NOTIFICATION:
            return { ...action.payload };

        case HIDE_NOTIFICATION:
            return { ...defaultState };

        default:
            return state;
    }
};

export default notificationReducer;