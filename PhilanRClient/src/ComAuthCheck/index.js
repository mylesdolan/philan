//import React from 'react';
import {authx} from "../Auth0/auth0ClassCom"
//import Route from "react-router";
import * as React from "react";
import {Route} from "react-router-dom";
import login from '../containers/Login/Login';

class AuthCheck extends React.Component {

    componentDidMount() {
        // console.log('AC',this.props);
    }


    render() {
        const {component: Component, unauthenticatedPath, mustHaveAgreedTnC, ...rest} = this.props;
        const renderComponent = (props) => {

            return authx.isAuthenticated()
                ? <Component {...props} />
                : (<div id="fullh" className="container-full-page">4040</div>)

        };

        return (
            <Route {...rest} render={renderComponent}/>

        );


    }


}

export {AuthCheck}
