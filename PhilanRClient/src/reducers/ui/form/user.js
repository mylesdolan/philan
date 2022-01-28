import { handleActions, combineActions } from 'redux-actions';
import pick from 'lodash/pick';
import {
    changeFirstName,
    changeSecondName,
    changeOtherOne,
    changeOtherTwo,
    toggleOnDashboard

} from '../../../actions/ui/form/user/user';


const initialState = {
    on_dashboard: true,
};


export default handleActions(
    {
        [changeFirstName]: (state, { payload }) => ({ ...state, firstname: payload }),
        [changeSecondName]: (state, { payload }) => ({ ...state, secondname: payload }),
        [changeOtherOne]: (state, { payload }) => ({ ...state, othervalueOne: payload }),
        [changeOtherTwo]: (state, { payload }) => ({ ...state, othervalueTwo: payload }),
        [toggleOnDashboard]: state => ({
            ...state,
            on_dashboard: !state.on_dashboard
        }),
     //   [toggleCurrency]: (state, { payload }) => {{ ...state, name: payload })
    },
    initialState
);
