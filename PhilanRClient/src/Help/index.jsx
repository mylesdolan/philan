import * as React from "react";
import {browserHistory} from "../History";
import {Form, Button, Dropdown, Input, Segment, Image, Icon} from 'semantic-ui-react';
import { Grid,Header } from 'semantic-ui-react';
import '../Various_font_etc.css'
import './help.css'
import { List } from 'semantic-ui-react'

class Help extends React.Component {

    constructor(props){
        super(props);
        this.goBack = this.goBack.bind(this); // i think you are missing this
     //   this.dispstate = this.dispstate.bind(this);// i think you are missing this
        this.help1 = this.help1.bind(this);
        this.help2 = this.help2.bind(this);
        this.help3 = this.help3.bind(this);
        this.help4 = this.help4.bind(this);
        this.help5 = this.help5.bind(this);
        this.help6 = this.help6.bind(this);
        this.state = {
            activehelp:''
        }

    }

   async goBack(){

//        browserHistory.push('/');
       browserHistory.goBack();

       //browserHistory.push('/');
    }

help1()
{

    this.setState({activeHelp:'help1'})
}
    help2()
    {this.setState({activeHelp:'help2'})}

    help3()
    {this.setState({activeHelp:'help3'})}

    help4()
    {this.setState({activeHelp:'help4'})}

    help5()
    {this.setState({activeHelp:'help5'})}
    help6()
    {this.setState({activeHelp:'help6'})}



   async componentDidMount() {
       // browserHistory.push('/');
    }

    render() {
        let theActiveOne=this.state.activehelp;

        return (
            <div id="fullh" className="container-full-page">


                   <Grid divided='vertically'>
                       <Grid.Row computer={6} mobile={16} columns={2}>
                           <Grid.Column computer={6} mobile={16}>
                               <section id={'analytics-for'}>
                                   <h2>Philantrophy</h2>
                                   <h3 id="helpHead">Help</h3>
                               </section>

                           </Grid.Column>


                               <Grid.Column computer={7} mobile={16} className={'headerButtons'}>
                                   <button className="BAOrangeButton" onClick={this.goBack}>Go Back</button>
                                   {/*     &nbsp;&nbsp;    <button className="BAOrangeButton" onClick={this.dispstate}>View Directory</button>*/}

                               </Grid.Column>


                       </Grid.Row>
                       <Header
                           icon="file text outline"
                           content={'Help Topics'}
                           className="account-widget"
                           className="SemHead2"
                       style={{margin:'10px'}}/>
                       <Grid.Row computer={6} mobile={16} columns={1}>
                           <Grid.Column computer={14} mobile={16}>
                       {/*    <Grid.Row columns={2} divided>
                        <Grid.Column>*/}


                            <p className="BASmallfontEtc">


                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae molestie felis. Pellentesque ligula massa, vestibulum sit amet eros quis, aliquam luctus nunc. Sed vel interdum orci. In pretium eros turpis, et elementum mi ultrices quis. Phasellus id magna risus.
                            {/*  <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />*/}


                           <ul className={'helpList'}>
                           <li><a href='#help1' onClick={this.help1} >Help Mars</a></li>
                           <li><a href='#help2' onClick={this.help2} >Help Jupiter</a></li>
                           <li><span><a href='#help3' onClick={this.help3} >Help Pluto</a></span></li>
                           <li><span><a href='#help4' onClick={this.help4} >Help Uranus</a></span></li>
                           <li key='hi'><span><a href='#help5' onClick={this.help5} >Help Neptune</a></span></li>
                           <li key='hi'><span><a href='#help6' onClick={this.help6} >Help Saturn</a></span></li>

                       </ul>
                                Donec imperdiet scelerisque nulla eget lacinia. Morbi neque lectus, pellentesque dignissim enim ut, faucibus finibus neque.
                            </p>
                       </Grid.Column>
                    </Grid.Row>

                    <Grid.Row columns={3}>
                        <Grid.Column computer={5} mobile={16}>
                            <div id={'help1'} className={"account-widget "+`${this.state.activeHelp==='help1'?'theActiveOne':'notActiveOne'}`} >
                                <div> &nbsp;Mars</div>
                                <div className="BASmallfontEtc">Maecenaas volutpat arcu a mauris volutpat pharetra. Nulla tincidunt odio quis lorem lacinia, id suscipit diam gravida. Integer scelerisque odio nisl, ac scelerisque diam dignissim vel. Integer iaculis vestibulum cursus.
                                </div>
                            </div>

                              </Grid.Column>
                        <Grid.Column computer={5} mobile={16}>
                            <div id={'help2'} className={"account-widget "+`${this.state.activeHelp==='help2'?'theActiveOne':'notActiveOne'}`}>
                                <div> &nbsp;Jupiter</div>
                                <div className="BASmallfontEtc notActiveOne">Maecenas volutpat arcu a mauris volutpat pharetra. Nulla tincidunt odio quis lorem lacinia, id suscipit diam gravida. Integer scelerisque odio nisl, ac scelerisque diam dignissim vel. Integer iaculis vestibulum cursus.
                                </div>
                            </div>
                                </Grid.Column>
                        <Grid.Column computer={5} mobile={16}>
                            <div id={'help3'} className={"account-widget "+`${this.state.activeHelp==='help3'?'theActiveOne':'notActiveOne'}`}>
                                <div> &nbsp;Pluto</div>
                                <div className="BASmallfontEtc">Maecenas volutpat arcu a mauris volutpat pharetra. Nulla tincidunt odio quis lorem lacinia, id suscipit diam gravida. Integer scelerisque odio nisl, ac scelerisque diam dignissim vel. Integer iaculis vestibulum cursus.
                                </div>
                            </div>
                           </Grid.Column>
                    </Grid.Row>
                   <Grid.Row>
                       <a href='#helpHead'><button className="BAOrangeButton">Back to top</button></a>
                   </Grid.Row>
                       <Grid.Row columns={3}>
                           <Grid.Column computer={5} mobile={16}>
                               <div id={'help4'} className={"account-widget "+`${this.state.activeHelp==='help4'?'theActiveOne':'notActiveOne'}`}>
                                   <div> &nbsp;Uranus</div>
                                   <div className="BASmallfontEtc">Maecenas volutpats arcu a mauris volutpat pharetra. Nulla tincidunt odio quis lorem lacinia, id suscipit diam gravida. Integer scelerisque odio nisl.
                                   </div>
                               </div>

                           </Grid.Column>
                           <Grid.Column computer={5} mobile={16}>
                               <div id={'help5'} className={"account-widget "+`${this.state.activeHelp==='help5'?'theActiveOne':'notActiveOne'}`}>
                                   <div> &nbsp;Neptune</div>
                                   <div className="BASmallfontEtc">Maecenas volutpat arcu a mauris volutpat pharetra. Nulla tincidunt odio quis lorem lacinia, id suscipit diam gravida. Integer scelerisque odio nisl.
                                   </div>
                               </div>
                           </Grid.Column>

                           <Grid.Column computer={5} mobile={16}>
                               <div id={'help6'} className={"account-widget "+`${this.state.activeHelp==='help6'?'theActiveOne':'notActiveOne'}`}>
                                   <div> &nbsp;Saturn</div>
                                   <div className="BASmallfontEtc">Maecenas volutpat arcu a mauris volutpat pharetra. Nulla tincidunt odio quis lorem lacinia, id suscipit diam gravida. Integer scelerisque odio nisl.
                                   </div>
                               </div>
                           </Grid.Column>
                       </Grid.Row>
                       <Grid.Row>
                           <a href='#helpHead'><button className="BAOrangeButton">Back to top</button></a>
                       </Grid.Row>
                </Grid>
            </div>
        )
    }
}

export {Help};
