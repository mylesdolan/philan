import Home from "../Home";
import {Help} from "../Help";
import UserForm from '../containers/User/Form'
import apidemo from '../containers/ApiDemo'


export default [
  {
    path: '/',
    exact: true,
    label: 'Home',
    icon: 'home',
    component: Home,
    authenNeeded:false

  },
  {
    path: '/help',
    exact: true,
    label: 'Help',
    icon: 'question circle outline',
    component: Help,
    authenNeeded:true
  },

  {
    path: '/uf',
    exact: true,
    label: 'User',
    icon: 'user plus',
    component: UserForm,
    authenNeeded:true
  },

  {
    path: '/apidemo',
    exact: true,
    label: 'API',
    icon: 'plug',
    component: apidemo,
    authenNeeded:false
  },


  {
    path: '/login',
    exact: true,
    label: 'Login',
    icon: 'sign in alternate',
    //component: Simple,
    authenNeeded:false,
    dontShowWhenIn:true
  },




  {
    path: '/logout',
    exact: true,
    label: 'Logout',
    icon: 'sign out alternate',
    //component: Simple,
    authenNeeded:true

  },



/*

  {
    path: '/dbwa',
    exact: true,
    label: 'Dash board',
    icon: 'newspaper',
    component: Dashboard,
    authenNeeded:true
  },


  {
    path: '/si',
    exact: true,
    label: 'Simple',
    icon: 'home',
    component: Simple,
    authenNeeded:false
  },


{
    path: '/transactions/:accountId?',
    link: '/transactions',
    exact: false,
    label: 'Transactions',
    icon: 'exchange',
    component: Dashboard
  },*/

];
