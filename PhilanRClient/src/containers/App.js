import React from 'react';
import {getForm} from "../selectors/ui/form/account";
import PropTypes from 'prop-types';
import {Router, Route, Switch, Redirect} from 'react-router-dom';
import {Dimmer, Loader, Icon} from 'semantic-ui-react';
import {connect} from 'react-redux';
import throttle from 'lodash/throttle';
import {authx} from "../Auth0/auth0ClassCom";
import {browserHistory} from "../History";
import {AuthCheck} from "../ComAuthCheck";
//import {Home} from "../Home";
import {Help} from "../Help";
import {Loading} from "../Components/Loading";
import './FooterV2.css';
import './HeaderV2.css';
import {BLogo} from '../Icons'
import routes from '../router/routes';
import SidebarMenu from './SidebarMenu';
import UserFrom from './User/Form';
import login from '../containers/Login/Login';
import Verify from '../containers/Verify';
import './App.css';
import './FooterV2.css'
import {windowResize} from '../actions/ui/windowResize';
import {toggleSidebar} from '../actions/ui/sidebar';
import {Grid, Header} from 'semantic-ui-react';

//import '../Various_font_etc.css'


const LAST_AUTHENTICATED = 'lastAuthenticated';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: 'Not logged in'
        }

    }

    componentDidMount() {
        window.addEventListener('resize', throttle(this.props.windowResize, 500));
        this.setState({email: 'Not logged in'});
    }

    toggleSB = (e) => {
        this.props.toggleSidebar(this.props.isMobile);
    };

    renderNavigationRoutes = () => {
        if (window.location.pathname.endsWith('index.html')) {
            return <Redirect to="/"/>;
        }
        const {toggleSidebar} = this.props;
        const {isSidebarOpen} = this.props;
        const isMobile = this.props.isMobile;
        return (
            <React.Fragment>
                <Dimmer
                    page
                    active={isMobile && !(isSidebarOpen.isSidebarOpen)}
                    onClick={toggleSidebar}
                    style={{zIndex: 100}}
                />

                <div id="sidebardiv">
                    <SidebarMenu
                        isOpen={(!isMobile) || (isMobile && !(isSidebarOpen.isSidebarOpen))}
                        toggleSidebar={this.toggleSB}
                    />

                    <div className={'sideBanner'}
                         style={{display: `${(!this.props.isMobile) ? 'block' : 'none'}`}}>BENEFACTS
                    </div>

                </div>
                <Switch>
                    {
                        flatten(routes).map(route => {

                                if (!route.authenNeeded) {
                                    console.log('doshow', route.label);
                                    return (

                                        <Route
                                            key={route.path}
                                            path={route.path}
                                            exact={route.exact}
                                            render={props => (
                                                <React.Fragment>
                                                    <route.component {...props} />
                                                </React.Fragment>
                                            )}
                                        />
                                    )
                                } else {
                                    return (
                                        <AuthCheck exact={route.exact} path={route.path} component={route.component}/>
                                    )
                                }
                            }
                        )
                    }
                    <Route exact={true} path={"/verify"} component={Verify}/>
                    <Route exact={true} path={"*"} component={login}/>

                </Switch>
            </React.Fragment>
        );


    };

    render() {

        return (
            <div id="philan-for">
                <div id="header" className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">


                            <Grid>
                                <Grid.Row columns='equal' mobile={16}>
                                    <Grid.Column>

                                        <div className={"squash"}>
                                            <div className="caption">PHILANTHROPY</div>
                                        </div>
                                        <BLogo className="BL"/>

                                    </Grid.Column>

                                    <Grid.Column computer={4}>
                                        <div>
                                            <div className="smallbars"
                                                 style={{display: `${(this.props.isMobile) ? 'block' : 'none'}`}}>
                                                <i className={'iconBig'}>
                                                    <Icon className={'bartIcon tiny'} name="bars"
                                                          onClick={this.props.toggleSidebar}/> </i></div>

                                            <div className={'personalText'}>
                                                {this.state.email}<br/>{this.props.form.firstname}&nbsp;{' '}{this.props.form.secondname}
                                            </div>

                                        </div>

                                        <Grid.Column>
                                        </Grid.Column>

                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>


                        </div>
                    </div>
                </div>

                <Router history={browserHistory}>
                    <Switch>

                        <Route exact={true} path="/login" render={
                            (/*props*/) => {
                                authx.signIn();
                                return <Loading/>
                                // return(<div>hi<Home/></div>)
                            }
                        }/>
                        <Route exact={true} path="/logout" render={
                            (/*props*/) => {
                                authx.signOut();
                                setTimeout(() => {
                                    this.setState({email: ''})
                                }, 4000);
                                return <Loading/>
                            }
                        }/>
                        <Route exact={true} path="/callback" render={
                            (/*props*/) => {
                                authx.handleAuthentication();
                                setTimeout(() => {
                                    this.setState({email: localStorage.getItem(LAST_AUTHENTICATED)})
                                }, 1000);
                                return <Loading/>

                            }
                        }/>
                        <div className={'paddingCssForAllMedia'}>
                            <Route render={this.renderNavigationRoutes}/>
                        </div>
                    </Switch>
                </Router>
                <footer id={'footer'}>
                    <Grid divided='vertically'>
                        <Grid.Row computer={6} mobile={16}>
                            <Grid.Column computer={8} mobile={16}>

                                <ul>
                                    <ul className={'regdocs'}>
                                        <li><span><a href='/home'>Hi</a></span></li>
                                        <li><span><a href='/home'>Ho</a></span></li>
                                        <li><span><a href='/home'>Silver</a></span></li>
                                        <li><span><a href='/home'>Long ranger</a></span></li>
                                        <li key='hi'><span><a href='/home'>Gold</a></span></li>

                                    </ul>
                                </ul>
                                <br/>
                                <br/>
                                <div className={'registered'}>Benefacts is registered in Ireland CRO 553387</div>

                            </Grid.Column>

                            <Grid.Column computer={6} mobile={16}>
                                <div className={'address'}>
                                <span>
                                    6 Merrion Square, Dublin, D02 FF95, Ireland
                                </span>
                                    <br/>
                                    <br/>
                                    <span>Directors: Tom Boland, Rory Coveney, Stephen Kinsella,<br/>Emma Lane-Spollen, Bob Ottenhoff (USA),<br/> Patricia Quinn, Philip Smith (UK), Anne Vaughan</span>
                                </div>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>

                </footer>


            </div>
        );
    };
}


function flatten(routes) {
    console.log('firstRoutes', routes);
    let flatRoutes = [];
    routes.forEach(route => {

        if (route.routes) {
            console.log('secondRoutesDotRoute', route.routes);
            flatRoutes.push({...route, exact: true});
            flatRoutes.push(...flatten(route.routes));
        } else {
            flatRoutes.push(route);
        }
    });

    return flatRoutes;
}

App.propTypes = {
    isMobile: PropTypes.bool,
};


const mapStateToProps = (state, ownProps) => ({
    isMobile: state.ui.isMobile,
    isSidebarOpen: state.ui.isSidebarOpen,
    isLoaded: state.testRed.isLoaded,
    form: getForm(state),

});

export default connect(
    mapStateToProps,
    {
        windowResize,
        toggleSidebar
    }
)(App);
