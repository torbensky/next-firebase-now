const admin = require("firebase-admin");

const cred64 = process.env.FIREBASE_ADMIN_CREDENTIAL;
const credStr = Buffer.from(cred64, "base64");

const databaseURL = process.env.FIREBASE_DB_URL;

admin.initializeApp({
    credential: admin.credential.cert(JSON.parse(credStr)),
    databaseURL
});

module.exports = async (req, res) => {
    const idToken = req.headers["x-test-token"];

    admin
        .auth()
        .verifyIdToken(idToken)
        .then(function (decodedToken) {
            var uid = decodedToken.uid;
            res.end(`${uid} authorized`);
        })
        .catch(function (error) {
            res.end("Error authorizing");
        });
};
