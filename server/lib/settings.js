settings = {"saml":[{
    "provider":"openam",
    "entryPoint":"https://openam.idp.io/openam/SSORedirect/metaAlias/zimt/idp",
    "issuer": "localhost:3000", //replace with url of your app
    "cert":"",
    "idpSLORedirectURL": "http://openam.idp.io/openam/IDPSloRedirect/metaAlias/zimt/idp",
    "privateKeyFile": "certs/mykey.pem",  // path is relative to $METEOR-PROJECT/private
    "publicCertFile": "certs/mycert.pem"  // eg $METEOR-PROJECT/private/certs/mycert.pem
}]}

Meteor.settings = settings;