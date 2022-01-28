import * as dotenv from 'dotenv';
dotenv.config();

const {
    PT_API_URL,
    PT_CLIENT_URL_FOR_CORS,
    AUTH0_DOMAIN,
    AUTH0_CLIENTID,
    AUTH0_AUDIENCE
}
=process.env;




const serverConfig=
    {apiEndpoint: PT_API_URL||'missingConfigValue',
    clientForCors: PT_CLIENT_URL_FOR_CORS||'missingConfigValue',
        auth0Domain:AUTH0_DOMAIN||'missingConfigValue',
        auth0ClientId:AUTH0_CLIENTID||'missingConfigValue',
        auth0Audience:AUTH0_AUDIENCE||'missingConfigValue'


    };

export default serverConfig
