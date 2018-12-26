import firebase from "firebase/app";

// Initialize Firebase
// TODO: Replace with your project's customized code snippet
var config = {
    apiKey: "<API_KEY>",
    authDomain: "<PROJECT_ID>.firebaseapp.com",
    databaseURL: "https://<DATABASE_NAME>.firebaseio.com",
    storageBucket: "<BUCKET>.appspot.com",
};
firebase.initializeApp(config);

export default () => {
    return <div>
        <p>Hello, firebase</p>
        <p>App: {firebase.app.name}</p>
    </div>
}