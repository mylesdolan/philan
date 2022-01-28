import {useAuth0} from "@auth0/auth0-react";
//import * as React from "react";
import React, { useState } from "react";
import {browserHistory} from "../History";



///This will not work until you put pack the right app as authprovider is providing domain and details.
const AuthHook = () => {
    const [isOpen, setIsOpen] = useState(false);
    const {
        user,
        isAuthenticated,
        loginWithRedirect,
        logout,
    } = useAuth0();
    const toggle = () => setIsOpen(!isOpen);

    const login = () =>{
        //loginWithRedirect({bh:browserHistory.push('/callback')}
        loginWithRedirect({returnTo: '/callback'}


        );
         browserHistory.push('/callback');
    }
    const logoutWithRedirect = () =>
        logout({
            returnTo: window.location.origin,
        });

    return (<div>
            <button onClick={() => login()}>Press</button>
            <button onClick={() => logoutWithRedirect()}>PressLogout</button>
        </div>
    );
};

export default AuthHook;
