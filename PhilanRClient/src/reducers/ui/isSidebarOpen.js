import { handleActions,combineActions } from 'redux-actions';
import { toggleSidebar } from '../../actions/ui/sidebar';
import { forceSidebarOpen } from '../../actions/ui/sidebar';
import { forceSidebarClosed } from '../../actions/ui/sidebar';
import {changeFirstName} from "../../actions/ui/form/user/user";

const initialState =
    {
        state:false
    };

export default handleActions(
    {
        [toggleSidebar]:(state,{payload}) =>
        {
         let isMobile=payload;
         if (isMobile)
         {console.log('state and ismobile pl',state,payload);return(!state)}
        else
         {return(true)}


        },
        [forceSidebarOpen]:state => (true),
        [forceSidebarClosed]:state => (false),
    },
    initialState

)

//export default handleActions(toggleSidebar, state => !state, false);
