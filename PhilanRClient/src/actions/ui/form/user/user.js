import { createActions } from 'redux-actions';

export const {
    changeFirstName,
    changeSecondName,
    changeOtherOne,
    changeOtherTwo,
    toggleOnDashboard

} = createActions(
    'CHANGE_FIRST_NAME',
    'CHANGE_SECOND_NAME',
    'CHANGE_OTHER_ONE',
    'CHANGE_OTHER_TWO',
    'TOGGLE_ON_DASHBOARD'
);
