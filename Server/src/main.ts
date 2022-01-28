import express = require('express');

const cors = require("cors");
const app = express();
const jwt = require("express-jwt");
const jwksRsa = require("jwks-rsa");
//const authConfig = require("./auth_config.json");
import serverConfig from "./config";

var fs = require("fs");

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const authConfig = {
    "domain": serverConfig.auth0Domain,
    "clientId": serverConfig.auth0ClientId,
    "audience": serverConfig.auth0Audience
};

const port = process.env.WEBSITES_PORT;
const appOrigin = serverConfig.clientForCors;

if (
    !authConfig.domain ||
    !authConfig.audience ||
    authConfig.audience === "YOUR_API_IDENTIFIER"
) {
    console.log(
        "Exiting: Please make sure that auth_config.json is in place and populated with valid domain and audience values"
    );

    process.exit();
}

//app.use(cors({ origin: appOrigin }));
app.use(cors());


const checkJwt = jwt({
    secret: jwksRsa.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: `https://${authConfig.domain}/.well-known/jwks.json`,
    }),

    audience: authConfig.audience,
    issuer: `https://${authConfig.domain}/`,
    algorithms: ["RS256"],
});
//@ts-ignore
app.get("/api/external", checkJwt, (req, res) => {
    // res.setHeader('Access-Control-Allow-Origin', 'https://ptwebclienttest.azurewebsites.net');
    res.setHeader('Access-Control-Allow-Origin', serverConfig.clientForCors);

    console.log('cht', checkJwt);
    console.log('envvarx', serverConfig.apiEndpoint);
    let jp;
    fs.readFile("jsdata3.json", function (err, data) {
        console.log('data', data);
        console.log('err', err);
        jp = JSON.parse(data);
        res.send({
                data: jp,
                msg: "Your access token was successfully validated!"

            }
        );

    });


});


app.post('/sneaky', (req, res) => {
    let date_ob = new Date();
    let date = ("0" + date_ob.getDate()).slice(-2);
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    let year = date_ob.getFullYear();
    let hours = date_ob.getHours();
    let minutes = date_ob.getMinutes();
    let seconds = date_ob.getSeconds();
    console.log('Res', res);
    console.log(year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds);
    let datetime = year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds;

    let ts = Date.now();
    console.log(ts);
    let vnrecs = req.body.vnrecs;
    console.log('VNRECSsneaky', vnrecs, req.body);
    fs.appendFile('sneaky.txt', JSON.stringify(req.body) + datetime + '\n', function (err) {
        if (err) return console.log(err);
        console.log('Writing out the object email');
    });

});


//@ts-ignore
app.listen(port, () => {
//app.listen( () =>{


    console.log('appOrigin', appOrigin);
    console.log(`API Server listening on port ${port}`)
});

