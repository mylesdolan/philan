import React from "react";
import {connect} from "react-redux";
//import {testRed} from "../../actions/testRed";
import PropTypes from "prop-types";
//import {getForm} from "../../selectors/ui/form/account";
import {Button} from "semantic-ui-react";
import {Grid} from "semantic-ui-react/dist/commonjs/collections/Grid";
import {authx} from "../../Auth0/auth0ClassCom"

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }



handleLogin()
{
    authx.signIn();
    this.accesstoken = authx.getAccessToken();
}

handleLogout()
{
    authx.signOut();
}

render()
{
    return (
        <div id="fullh" className="container-full-page">
            404
        </div>
    )
}

}

//Placeholders
Login.propTypes = {};
const mapStateToProps = state => ({});


export default connect(mapStateToProps, {})(Login);
