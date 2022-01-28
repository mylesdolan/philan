import React from 'react';
import {Route, Link} from 'react-router-dom';
import {Icon, Menu} from 'semantic-ui-react';
import routes from '../router/routes';
import {authx} from "../Auth0/auth0ClassCom";
import axios from "axios";
import siteConfig from "../site-config";

const apiOrigin = siteConfig.apiEndpoint;


const onClick = (routevar) => {
    console.log('routevar', routevar);
    //console.log('apio sneaky', apiOrigin);
    axios.post(`${apiOrigin}/sneaky`, routevar)
        .then(res => {
            let message = 'Server message: ' + res;
        });
};


const SidebarMenu = ({isOpen, toggleSidebar}) => (
    <nav className={isOpen ? 'open' : 'closed'} onClick={toggleSidebar}>
        <Menu fluid color="blue" vertical icon="labeled">
            {routes.map(route => {
                    if ((authx.isAuthenticated() && route.authenNeeded) || (!route.authenNeeded && route.dontShowWhenIn !== true) || (!authx.isAuthenticated() && route.dontShowWhenIn === true)) {
                        return (
                            <Route
                                key={route.path}
                                exact={route.exact}
                                path={route.path}
                                children={({match}) => (
                                    <div id="iconDiv" className={match ? 'theActiveOne' : 'notActiveOne'}>
                                        <Menu.Item as={Link} classname={'menItem'} to={route.link || route.path}
                                                   active={!!match}
                                                   onClick={onClick.bind(this, route)}
                                        >
                                            <Icon name={route.icon} className={'semIcon'}/>
                                            <i className={'iconLabels'}>  {route.label}  </i>
                                        </Menu.Item>
                                    </div>
                                )}
                            />
                        )
                    } else {
                        return null
                    }
                }
            )}
        </Menu>
    </nav>
);

export default SidebarMenu;
