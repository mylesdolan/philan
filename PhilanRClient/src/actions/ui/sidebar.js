//import { createAction } from 'redux-actions';

//export const toggleSidebar = createAction('TOGGLE_SIDEBAR');

import { createActions } from 'redux-actions';

export const {
    toggleSidebar,
    forceSidebarOpen,
    forceSidebarClosed,
}
    = createActions(
    'TOGGLE_SIDEBAR',
    'FORCE_SIDEBAR_OPEN',
    'FORCE_SIDEBAR_CLOSED');
