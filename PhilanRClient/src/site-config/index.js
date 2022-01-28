//import {Process as process} from "node/process";

const {
    REACT_APP_AUTH0_DOMAIN,
    REACT_APP_USER_API_ENDPOINT,
    REACT_APP_AUTH0_CLIENTID,
    REACT_APP_AUTH0_CALLBACK,
    REACT_APP_AUTH0_AUDIENCE
}=process.env;

const siteConfig=
    {apiEndpoint: REACT_APP_USER_API_ENDPOINT||'missingConfigValue'
    ,auth0Domain: REACT_APP_AUTH0_DOMAIN||'missingConfigValue',
    auth0ClientId: REACT_APP_AUTH0_CLIENTID||'missingConfigValue',
    auth0Callback: REACT_APP_AUTH0_CALLBACK||'missingConfigValue',
        auth0Audience: REACT_APP_AUTH0_AUDIENCE||'missingConfigValue'
    }

    ;

export default siteConfig

