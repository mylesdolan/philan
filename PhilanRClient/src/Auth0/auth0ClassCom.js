//import {useAuth0} from "@auth0/auth0-react";
//import * as React from "react";
import React, {useState} from "react";
import auth0 from 'auth0-js';
import {browserHistory} from "../History";

import axios from "axios";
import siteConfig from "../site-config";

const apiOrigin = siteConfig.apiEndpoint;

const LAST_AUTHENTICATED = 'lastAuthenticated';


const IS_LOGGED_IN = 'isLoggedIn';

//const AuthFunc = () => {

class Auth {

    accessToken = '';
    idToken;
    expiresA;
    scopes;


    auth0 = new auth0.WebAuth({
        domain: siteConfig.auth0Domain,
        clientID: siteConfig.auth0ClientId,
        redirectUri: siteConfig.auth0Callback,
        responseType: 'token id_token',
        audience: siteConfig.auth0Audience
    });


    constructor() {
        this.signIn = this.signIn.bind(this);
        this.setSession = this.setSession.bind(this);
        this.isAuthenticated = this.isAuthenticated.bind(this);

        console.log('sc', siteConfig);


    }

    signIn() {
        this.auth0.authorize();
    }

    handleAuthentication() {

        console.log("Handle authentication called");

        this.auth0.parseHash((err, authResult) => {
            if (authResult && authResult.accessToken && authResult.idToken) {
              this.setSession(authResult);


            } else if (err) {
                console.error('Error parsing hash');
                console.error(err);

                if (err.errorDescription.includes("verify")) {
                    this.signOut('/verify');
                    //  this.signOut();
                    // browserHistory.push('/verify')
                    //  setTimeout(() => {
                    //  browserHistory.push('/verify');}, 5000);
                } else {
                    browserHistory.push('/')
                }
            } else {
                console.log('neither')
            }
        });
    }

    async getProfile2(token) {
        if (!this.auth0) {
            return
        }

        return new Promise((resolve, reject) => {

            if (!this.auth0) {
                return
            }

            this.auth0.client.userInfo(token, (err, profile) => {

                if (err) {
                    reject(err);
                }

                resolve(profile);

            });


        });


    }


    async setSession(authResult) {
        localStorage.setItem(IS_LOGGED_IN, 'true');
        // Set the time that the access token will expire at
        const expiresAt = (authResult.expiresIn * 1000) + new Date().getTime();
        this.accessToken = authResult.accessToken;
        this.idToken = authResult.idToken;
        this.expiresAt = expiresAt;
        console.log('expat', this.expiresAt);
        let prof = await this.getProfile2(this.accessToken);
        console.log('hardlyLikelyuxyxf', prof);
        const {email, nickname, sub} = prof;

        let concatvar = window.innerWidth + email;
        console.log('concat', concatvar);
        axios.post(`${apiOrigin}/sneaky`, concatvar)
            .then(res => {
                let message = 'Server message: ' + res;
                alert(message);
                console.log("sneaky", res)
            });


        localStorage.setItem(LAST_AUTHENTICATED, email);

        if (!prof.email_verified) {
            this.signOut('/verify')
        } else {
            browserHistory.push('/')
        }

    }


    isAuthenticated() {
        // Check whether the current time is past the
        // access token's expiry time
        let expiresAt = this.expiresAt;
        return new Date().getTime() < expiresAt;
    }

    getAccessToken() {
        return this.accessToken;
    }


    signOut(returnTo = '/') {
        // console.log (`Sign out route = [${returnTo}]`);
        //clearInterval(this.sessionCheckerHandle);
        // Remove tokens and expiry time
        this.accessToken = undefined; // null
        this.idToken = undefined; // null
        this.expiresAt = 0;
        // Remove isLoggedIn flag from localStorage
        localStorage.removeItem(IS_LOGGED_IN);
        this.auth0.logout({
            returnTo: `${window.location.origin}${returnTo}`,
        });

        // navigate to the required route
        // history.replace(returnTo);
    }


}


const auth = new Auth();

export {
    auth as authx
}



