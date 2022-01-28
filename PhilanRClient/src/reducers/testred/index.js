import { combineActions, handleActions } from 'redux-actions';
import {testRed} from '../../actions/testRed';
//import EntityMap from '../../entities/EntityMap';
import { getType } from 'typesafe-actions';
//import { signOutSuccess } from 'features/user/state/ui/SignOut.action';
/*const initialState=
    {
        greeting:'hello'
*/
const initialState = false;

//const signOutSuccess=true;

console.log('ISIS2hxy',initialState);
/*
export default handleActions(
   {
     //   [testRed]: (state, {payload}) => {
      [testRed]: (state, action) => {
          console.log('gostherered');
        const account = action.payload;
           // return {...payload }
       // return EntityMap.set(state, {cat:'tom'});
        return EntityMap.set(state, account);
        },
     [getType(signOutSuccess)]: () => initialState
    },
    initialState
);
#####
export const registerUser = (userData, history) => dispatch => {
  axios
    .post('/api/users/register', userData)
    .then(res => history.push('/login'))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

*/

export default handleActions(
  {
   // [loadAccountsSuccess]: (state, action) => {
  /* [testRed]: (state, action) => {


    //  console.log('ActionXs',action,action.payload);
   //  console.log('ActionXEy',state);
     // const accounts = action.payload;
     // return EntityMap.fromArray(accounts);
    ...state,
        isLoaded: true,
    ...pick(payload, Object.keys(state))


     return 0
    },*/
    [testRed]: (state, { payload }) => ({
      ...state,
      isLoaded: true,
     // ...pick(payload, Object.keys(state)),
      harry:payload
    }),
  /*  [combineActions(saveAccount, updateAccount)]: (state, action) => {
      const account = action.payload;
      return EntityMap.set(state, account);
    },
    [combineActions(removeAccountSuccess, saveAccountFailure)]: (
      state,
      action
    ) => {
      const accountId = action.payload;
      return EntityMap.remove(state, accountId);
    },*/
   // [getType(signOutSuccess)]: () => initialState
  },
  initialState
);
