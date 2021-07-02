# Sign JWT

Simple example use using public and private keys for JWT.

## Create public/private key

You can [use website to generate key pairs](https://travistidwell.com/jsencrypt/demo/).


## Sign and verify basics

Based on this [youtube](https://www.youtube.com/watch?v=omZ4fbWTsME&list=PLRiZb4DNOVQd3CQCCgGCObu3UTs-KaQJy&index=23) vide and [repo](https://github.com/Technosaviour/NodeJwtRsa)

```javascript
'use strict';

const fs = require('fs');
var jwt = require('jsonwebtoken');

var privateKey = fs.readFileSync('./private.key','utf8');
var publicKey = fs.readFileSync('./public.key','utf8');

var payload = { };
payload.userName = "Biswa";
payload.userId = "11223344"
payload.role = "Admin";

console.log("\n Payload: " + JSON.stringify(payload));

var iss = "Technosaviour";
var sub = "technosaviourcrypto@gmail.com";
var aud = "http://youtube.com/c/technosaviour";
var exp = "24h";

var signOptions = {
    issuer : iss,
    subject: sub,
    audience: aud,
    expiresIn: exp,
    algorithm: "RS256"
};
// Create the JWT Token
var token = jwt.sign(payload, privateKey, signOptions);

// Send this token to the client so that it can be used in subsecuent request
console.log("\n Token: " + token);


//==================================================================================
//                      token verification
//==================================================================================
var verifyOptions = { 
    issuer : iss,
    subject: sub,
    audience: aud,
    maxAge: exp,
    algorithms: ["RS256"]
};
var verified = jwt.verify(token, publicKey, verifyOptions);
console.log("\n Verified: " + JSON.stringify(verified));

var decoded = jwt.decode(token, {complete: true});
console.log("\n Docoded Header: " + JSON.stringify( decoded.header));
console.log("\n Docoded Payload: " +  JSON.stringify(decoded.payload));
console.log("\n Details for the user " + payload.userId + " is sent back to client")

```