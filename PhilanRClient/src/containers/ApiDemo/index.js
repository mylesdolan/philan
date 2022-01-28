import React from "react";
import {connect} from "react-redux";
import {testRed} from "../../actions/testRed";
import PropTypes from "prop-types";
import {getForm} from "../../selectors/ui/form/account";
import {Loading} from "../Loading";
//import {Grid} from "semantic-ui-react/dist/commonjs/collections/Grid";
import {Form, Button, Dropdown, Input, Segment} from 'semantic-ui-react';
import {Grid} from 'semantic-ui-react';

import {BarChart} from "../Chart/chart";
import {authx} from "../../Auth0/auth0ClassCom";
import siteConfig from "../../site-config";
import './apidemo.css';
import Spinner from '../spinner/Spinner';

const apiOrigin = siteConfig.apiEndpoint;


class ApiDemo extends React.Component {
    accesstoken = '';

    constructor(props) {
        super(props);

        this.state = {

            chartData: '',
            showResult: false,
            apiMessage: '',
            apiData: '',
            loading: false

        }

    }

    componentDidMount() {
        this.state = {
            showResult: false,
            apiMessage: '',
            loading: false,
        }
    }

    callApi = async () => {
        this.setState({loading: true});
        try {
            const token = await authx.getAccessToken();
            //  console.log('Bear', token);
            //console.log('apiorg', apiOrigin);
            const response = await fetch(`${apiOrigin}/api/external`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            const responseData = await response.json();//.then(()=> this.setState({loading:false}));
            this.useEffect(responseData);//.then(()=> this.setState({loading:false}));
            this.setState({
                showResult: true,
                apiMessage: JSON.stringify(responseData.msg, null, 2),
                apiData: JSON.stringify(responseData.data, null, 2),
                loading: false

            });

        } catch (error) {

            this.setState({
                showResult: true,
                apiMessage: error.toString(),
                loading: false
            });
        }
    };



    useEffect = (data) => {
        const fetchPrices = async () => {
                this.setState({
                chartData: {
                    labels: data.data.data.map((crypto) => crypto.name),
                    datasets: [
                        {
                            label: "Price in USD",
                            data: data.data.data.map((crypto) => crypto.priceUsd),
                            backgroundColor: [
                                "#ffbb11",
                                "#ff00bf",
                                "#ecf0f1",
                                "#50AF95",

                            ]
                        }
                    ]
                }
            });

        };
        fetchPrices()
    };

    render() {

        let spin;
        if (this.state.loading === true) {
            spin = <Spinner/>;
        }

        let srvData = this.state.apiData.substr(1, 600) + ' Etc Etc Etc...';

        let cd = this.state.chartData;

        return (
            <div id="fullh" className="container-full-page">
                <Grid computer={6} mobile={16}>
                    <Grid.Row>
                        <Grid.Column computer={6} mobile={16}>
                            <section id={'analytics-for'}>
                                <h2>Philantrophy</h2>
                                <h3>API Demo</h3>
                            </section>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row computer={6} mobile={32}>
                        <Grid.Column computer={7} mobile={16}>
                            {
                                (this.state.chartData !== '' && this.state.chartData !== null && this.state.chartData !== undefined) ?
                                    <div>
                                                                     <BarChart chartData={cd}/>
                                    </div>
                                    : null
                            }
                        </Grid.Column>

                        <Grid.Column computer={7} mobile={16}>
                            <Segment attached="bottom" computer={7} mobile={16}>
                                <div>
                                    <Button onClick={this.callApi} width={7} primary fluid content="Call Api"/>
                                    <div className="result-block-container">
                                        {this.state.showResult && (
                                            <div className="result-block" data-testid="api-result">
                                                <h6 className="muted">Result</h6>
                                                <span>Server Response {this.state.apiMessage}</span>
                                            </div>
                                        )}
                                        {
                                            (!this.state.loading && this.state.showResult && this.state.apiMessage.includes("success")) ?
                                                <div><br/>You have successfully called a server API using Auth0.<br/>Some
                                                    curves from protected API data on left or below( for phones).
                                                    <br/><br/>Logout and try same.<br/>
                                                    <br/><br/>DATA{srvData}</div>
                                                : null

                                        }
                                        {
                                            (this.state.showResult && !(this.state.apiMessage.includes("success"))) ?
                                                <div><br/>Somethings Up. I dont think you are Auth0 logged in and
                                                    therefore cannot connect to server API. Login Please.</div>
                                                : null

                                        }
                                          {spin}

                                    </div>
                                </div>
                                {/*<CallApi/>*/}
                            </Segment>
                        </Grid.Column>


                    </Grid.Row>

                </Grid>
            </div>
        )

    }

}

ApiDemo.propTypes = {
    testRed: PropTypes.func,
};
const mapStateToProps = state => ({
    form: getForm(state)
});


export default connect(mapStateToProps, {})(ApiDemo);
