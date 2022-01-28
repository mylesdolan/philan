import * as React from "react";
import {Link} from "react-router-dom";
import {browserHistory} from "../History";
//import { useAuth0 } from "@auth0/auth0-react";
import AuthHook from "../Auth0/auth0FuncComp"
import {authx} from "../Auth0/auth0ClassCom"

import siteConfig from "../site-config"
import './index.css';
//import {Grid} from "semantic-ui-react/dist/commonjs/collections/Grid";
import {Grid, Icon} from 'semantic-ui-react';
import { Segment} from 'semantic-ui-react';
import {Header} from "semantic-ui-react";
import { Image } from 'semantic-ui-react'
import { List } from 'semantic-ui-react'

import { connect } from 'react-redux';
import {getForm} from "../selectors/ui/form/account";

const apiOrigin= "http://localhost:3003";

const ImageExampleFloated = () => (
    <Segment className="BASmallfontEtc">
        <br/> <Image src='Images/curve1.jpg' size='small' rounded floated='left' />

        <p>
            Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia
            facete scriptorem, est autem aliquip detraxit at. Usu ocurreret
            referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque
            electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei
            ex natum rebum iisque.
        </p>
        <Image src='Images/curve2.jpg' rounded size='small' floated='right' />
        <p>
            Audiaam quaerendum eu sea, pro omittam definiebas ex. Te est latine
            definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te
            phaedrum referrentur consectetuer.
        </p>
        <p>
            Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut
            facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te
            porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi
            everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu
            per, quas minimum postulant per id. Id vix fabulas oporteat, ei quo vide
            phaedrum, vim vivendum maiestatis in. Id vix fabulas oporteat, ei quo vide
            phaedrum, vim vivendum maiestatis in.
        </p>
        {/*spacefiller*/}
        <div style={{lineHeight:.1}}>&nbsp;</div>
    </Segment>
)
const ImageExampleRounded = () => (
    <Image src='https://react.semantic-ui.com/images/wireframe/square-image.png' size='medium' rounded />
);

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
        this.handleBack = this.handleBack.bind(this);
        this.handleLogin = this.handleLogin.bind(this); // you are missing this line
        this.handleacHelp = this.handleacHelp.bind(this);
        this.state = {
            showResult:false,
            apiMessage:''
        }
        }


      /*  const {
            user,
            isAuthenticated,
            loginWithRedirect,
            logout,
        } = useAuth0();
*/




        handleLogin()
    {
        authx.signIn();
        this.accesstoken=authx.getAccessToken();
    }

    handleLogout()
    {
        authx.signOut();
    }

    handleBack() {
       // this.props.history.push('/help');
       // browserHistory.push('/help');
        browserHistory.goBack();

    }

    handleacHelp()
    {
    browserHistory.push('/ac');
    }


    render() {
            console.log('chekitout',this.props);
       let loggedin;
        if (authx.isAuthenticated()) {

            loggedin=  <div>    <button onClick={this.handleLogout}> Logout</button> Im logged in</div>;
            console.log('loggeddy');
       //     this.setState({hi:'ho'});
        } else {
         //   this.setState({hi:'hi'});

            loggedin=  <div><button onClick={this.handleLogin}> Login</button>Im not logged in</div>;
            console.log('notlogged');
        }



        return (
            <div id="fullh" className="container-full-page">
                {/*   <AuthHook/>
                <Link to="/help">Help</Link>
                <button onClick={this.handleBack}> Help</button>
                <button onClick={this.handleacHelp}> Ac Help</button>
                {loggedin}
                */}

                <Grid divided='vertically'>
                    <Grid.Row computer={5} mobile={16} columns={2}>
                        <Grid.Column computer={6} mobile={16}>
                            <section id={'analytics-for'}>

                                <h2 id="homehead">Philantrophy



                                </h2>



                                <h3>Home</h3>

                                { this.props.form.firstname !==null && this.props.form.firstname !==undefined ?

                                    <h2 id="homehead" className={'Welcome'}>Welcome &nbsp;
                                        {this.props.form.firstname} &nbsp;(msg from redux)

                                    </h2>:null }



                            </section>

                        </Grid.Column>


                        <Grid.Column computer={7} mobile={16} className={'headerButtons'}>
                            <button className="BAOrangeButton" onClick={this.handleBack}>Go Back</button>
                            {/*     &nbsp;&nbsp;    <button className="BAOrangeButton" onClick={this.dispstate}>View Directory</button>*/}



                        </Grid.Column>


                    </Grid.Row>
                    <Grid.Row computer={5} mobile={16} columns={1}>
                        <Grid.Column computer={14} mobile={16}>
                            {/*    <Grid.Row columns={2} divided>
                        <Grid.Column>*/}
                            <Header
                                icon="briefcase line"
                                content={'Introduction'}
                                // className="account-widget"
                                className="SemHead2"
                            />


                            <ul className="BASmallfontEtc">
                                <List.Item><Icon name='check circle outline' style={{color:'#4b85e6'}}/>Its mobile friend (using bars and dimmer).</List.Item>
                                <List.Item><Icon name='check circle outline' style={{color:'#4b85e6'}}/>Any saved data (see user tab) is saved to REDUX memory and will not persist after session.</List.Item>
                                <List.Item><Icon name='check circle outline' style={{color:'#4b85e6'}}/>Login uses Auth0 (as do client, server and API)</List.Item>
                                <List.Item><Icon name='check circle outline' style={{color:'#4b85e6'}}/>To sign up go to the Auth0 Sign Up tab on login as for BA.</List.Item>
                            </ul>


                        </Grid.Column>

                    </Grid.Row>
                    <Grid.Row computer={5} mobile={16} columns={2}>
                        <Grid.Column computer={7} mobile={16}>
                            {/*    <Grid.Row columns={2} divided>
                        <Grid.Column>*/}
                            <Header
                                icon="chart line"
                                content={'Charts'}
                               // className="account-widget"
                                className="SemHead2"
                            />

<ImageExampleFloated/>

                        </Grid.Column>
                        <Grid.Column computer={7} mobile={16}>
                            <Header
                                icon="file line"
                                content={'Reports'}
                                className="account-widget"
                                className="SemHead2"
                            />
                            <Segment>
                            <div className="BASmallfontEtc">Maecenas volutpat arcu a mauris volutpat pharetra. Nulla tincidunt odio quis lorem lacinia, id suscipit diam gravida. Integer scelerisque odio nisl, ac scelerisque diam dignissim vel. Integer iaculis vestibulum cursus. Maecenas odio mi, semper et eros in, volutpat suscipit elit. Pellentesque a quam est. Etiam vulputate augue urna, nec tempus felis fermentum vel. Fusce id urna id ante tempor luctus. Sed scelerisque arcu nec arcu viverra pellentesque. Curabitur fermentum sem eget condimentum consequat.

                                <p>
                                    Audiaam quaerendum eu sea, pro omittam definiebas ex. Te est latine
                                    definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te
                                    phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide
                                    phaedrum, vim vivendum maiestatis in.
                                </p>
                                <p>
                                    Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut
                                    facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te
                                    porro.
                                </p>
                            </div>
                            </Segment>


                            {/*
                                Works but rejecting as header is better separate.
                                <div className="account-widget">
                                <div>

                                        <Icon name="bars" onClick={this.props.toggleSidebar} />
                                    &nbsp;XHelloXxyx</div>
                                 <Image src='Images/fish200x200.jpg' size='tiny' rounded right floated classname={'fishpic'} />
                                <div className="BASmallfontEtc">Maecenas volutpat arcu a mauris volutpat pharetra. Nulla tincidunt odio quis lorem lacinia, id suscipit diam gravida. Integer scelerisque odio nisl, ac scelerisque diam dignissim vel. Integer iaculis vestibulum cursus. Maecenas odio mi, semper et eros in, volutpat suscipit elit. Pellentesque a quam est. Etiam vulputate augue urna, nec tempus felis fermentum vel. Fusce id urna id ante tempor luctus. Sed scelerisque arcu nec arcu viverra pellentesque. Curabitur fermentum sem eget condimentum consequat.
                                    <p>
                                        Audiaam quaerendum eu sea, pro omittam definiebas ex. Te est latine
                                        definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te
                                        phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide
                                        phaedrum, vim vivendum maiestatis in.
                                    </p>
                                    <p>
                                        Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut
                                        facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te
                                        porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi
                                        everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu
                                        per, quas minimum postulant per id.
                                    </p>
                                </div>
                            </div>*/}
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <a href='#homehead'><button className="BAOrangeButton">Back to top</button></a>
                    </Grid.Row>




                </Grid>


            </div>
        )
    }
}

const mapStateToProps = state => ({
    form: getForm(state)
});

export default connect(mapStateToProps)(Home);

//export {Home};
