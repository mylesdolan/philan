import {connect} from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import {Form, Checkbox, Header, Segment, Image, Icon} from 'semantic-ui-react';
import './index.css';
import {testRed} from '../../actions/testRed';
import
{
    changeFirstName,
    changeSecondName,
    changeOtherOne,
    changeOtherTwo,
    toggleOnDashboard
} from '../../actions/ui/form/user/user';
import {getForm} from '../../selectors/ui/form/account';
import {Grid} from 'semantic-ui-react';
import {List} from 'semantic-ui-react'

const LAST_AUTHENTICATED = 'lastAuthenticated';

class UserForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            forform: '',
            firstname: '',
            secondname: '',
            othervalueone: '',
            othervaluetwo: '',
            email: '',
        }

        // this.groups = getAccountGroupOptions();
    }

    componentDidMount() {
        this.setState({email: localStorage.getItem(LAST_AUTHENTICATED)});

    }

    handleSubmit = event => {
        event.preventDefault();
        //this.props.saveAccount(
        console.log('saving this thing', this.props.form);
        this.setState({form: this.props.form});//doesnt work right
        this.setState({firstname: this.props.form.firstname});
        this.setState({secondname: this.props.form.secondname});

    };

    handleFirstNameChange = (event, {value}) => {
        this.props.changeFirstName(value);
    };

    handleSecondNameChange = (event, {value}) => {
        this.props.changeSecondName(value);
    };

    handleSubmitChgOthOne = (event, {value}) => {
        event.preventDefault();
        console.log('saving this thingxx');
        this.props.changeOtherOne(value);
    };

    handleSubmitChgOthTwo = (event, {value}) => {
        event.preventDefault();
        this.props.changeOtherTwo(value);

    };


    render() {

        console.log('formState', this.state.form);

        return (<div id="fullh" className="container-full-page">
                <Grid divided='vertically'>
                    <Grid.Row computer={6} mobile={16} columns={2}>
                        <Grid.Column computer={15} mobile={16}>
                            <section id={'analytics-for'}>
                                <h2>Philantrophy</h2>
                                <h3>Profile</h3>
                            </section>
                            <Header
                                icon="briefcase line"
                                content={'My User Profile'}
                                // className="account-widget"
                                className="SemHead2"
                            />
                            <p className="BASmallfontEtc"> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Vivamus vitae molestie felis. Pellentesque ligula massa, vestibulum sit amet eros quis,
                                aliquam luctus nunc.
                                {/*  <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />*/}

                                <ul>

                                    <List.Item><Icon name='check circle outline' style={{color: '#4b85e6'}}/>Auth0
                                        login <b><i style={{
                                            color: '#4b85e6',
                                            fontStyle: 'normal'
                                        }}>{this.state.email}</i></b></List.Item>
                                    <List.Item><Icon name='check circle outline' style={{color: '#4b85e6'}}/>Data is
                                        saved to REDUX and will not persist after session.</List.Item>
                                    <List.Item><Icon name='check circle outline' style={{color: '#4b85e6'}}/>For Demo
                                        some of this data is displayed on header and home page. Check it
                                        out!</List.Item>
                                </ul>
                            </p>

                            <div className={'userfCon'}>
                                <Segment attached="bottom" classsName={'userSeg'} computer={6} mobile={16}>
                                    <Header
                                        icon="file text outline"
                                        content={'Edit My Profile'}

                                        className="SemHead"
                                    />
                                    <Form className="account-form" onSubmit={this.handleSubmit} computer={6}
                                          mobile={16}>
                                        <Form.Group>
                                            <Form.Input
                                                computer={9} mobile={16}
                                                required
                                                label="Name"
                                                placeholder="Account name"
                                                value={this.props.form.name}

                                                onChange={this.handleFirstNameChange}
                                            />
                                            <Form.Input
                                                width={7}
                                                required
                                                label="Second Name"
                                                placeholder="Second name"
                                                value={this.props.form.secondname}
                                                onChange={this.handleSecondNameChange}
                                            />
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Input
                                                width={7}
                                                required
                                                label="Email"
                                                placeholder="Email"
                                                value={this.props.form.othone}

                                                onChange={this.handleSubmitChgOthOne}
                                            />
                                            <Form.Input
                                                width={7}
                                                required
                                                label="Telephone"
                                                placeholder="Telephone"
                                                value={this.props.form.othtwo}
                                                onChange={this.handleSubmitChgOthTwo}
                                            />
                                        </Form.Group>


                                        <Form.Group unstackable>
                                            <br/>
                                            <Form.Field width={7} style={{
                                                paddingTop: '0.5em',
                                                paddingBottom: '0.5em',
                                                marginTop: '0.5em'
                                            }}>
                                                <Checkbox
                                                    label="Show on Dashboard"
                                                    checked={this.props.form.on_dashboard}
                                                    onChange={this.props.toggleOnDashboard}
                                                />
                                            </Form.Field>

                                            <Form.Button width={4} primary fluid content="Save / Display Redux" style={{
                                                paddingTop: '0.5em',
                                                paddingBottom: '0.5em',
                                                marginTop: '0.5em',
                                                width: '180px'
                                            }}/>
                                        </Form.Group>
                                    </Form>
                                </Segment>
                            </div>

                            <div className={'userfCon'}>
                                <Segment attached="bottom" classsName={'userSeg'} computer={6} mobile={16}>
                                    <p className="BASmallfontEtc"> Lorem ipsum dolor sit amet, consectetur adipiscing
                                        elit.
                                        {this.state.firstname !== '' ?

                                            <div>
                                                {this.state.firstname} <br/>
                                                {this.state.secondname} <br/>
                                                <br/> Please check home page for redux also.
                                            </div> : null}


                                        {/*  <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />*/}
                                    </p>
                                </Segment>
                            </div>
                        </Grid.Column>
                        <Grid.Column computer={7} mobile={16}>

                        </Grid.Column>


                    </Grid.Row>
                </Grid>
            </div>

        );
    }
}


UserForm.propTypes = {
    form: PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        secondname: PropTypes.string,
        othervalueOne: PropTypes.string,
        othervalueTwo: PropTypes.string,

        on_dashboard: PropTypes.bool
    }),

    toggleOnDashboard: PropTypes.func,
    testRed: PropTypes.func,
    changeFirstName: PropTypes.func,
    changeSecondName: PropTypes.func,
    changeOtherTwo: PropTypes.func,
    changeOtherOne: PropTypes.func,

};

const mapStateToProps = state => ({
    form: getForm(state),

});

export default connect(
    mapStateToProps,
    {
        testRed,
        changeFirstName,
        changeSecondName,
        changeOtherTwo,
        changeOtherOne,
        toggleOnDashboard

    }
)(UserForm);



