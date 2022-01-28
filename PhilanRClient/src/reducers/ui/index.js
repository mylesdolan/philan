import { combineReducers } from 'redux';
import form from './form';
import isMobile from './isMobile';
//import isSidebarOpen from './isSidebarOpen';
import isSidebarOpen from './isSidebarOpenCombine'

export default combineReducers({
        isMobile,
        //isSidebarOpen,
        form,
isSidebarOpen
});
