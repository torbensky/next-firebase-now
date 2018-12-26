# A basic next.js example of using server *and* client side firebase

I created this to make a "vanilla" Now/Firebase example because I can't seem to get an app that uses firebase to deploy to the Now 2.0 platform. After seeing some posts in spectrum.chat on the subject I decided to make a basic repo with the goal of providing an example for those who want to see source.

## Current status: 

It all works now!

## Goals: 

Get an app that uses `firebase` and `firebase-admin` libraries to deploy on Now 2.0.

- Using other firebase client submodules (auth storage, database, firestore)

- Using the admin library (the current example doesn't actually do any server stuff yet)

## TLDR;
- `yarn dev` works, I get an app
- `now` works, I get an "app" that uses both server and client side firebase libraries.

## Long explanation

I think almost anyone using firebase will run into an issue when deploying on Zeit Now 2.0 (the lambda serverless version).

The problem stems from importing only the "root" `firebase` module like so:

```
import firebase from "firebase"

// Initialize Firebase
// TODO: Replace with your project's customized code snippet
var config = {
    apiKey: "<API_KEY>",
    authDomain: "<PROJECT_ID>.firebaseapp.com",
    databaseURL: "https://<DATABASE_NAME>.firebaseio.com",
    storageBucket: "<BUCKET>.appspot.com",
};
firebase.initializeApp(config);
```

This is what the firebase documentation tells you to do for a Node.js web application. This ran fine for me locally, but it did not work on the Zeit Now 2.0 platform because of some build issues that I don't fully understand yet. 

The good news is, I found a workaround: import the firebase submodules only.

So that means the above example looks like so:
```
import firebase from "firebase/app"

// Initialize Firebase
// TODO: Replace with your project's customized code snippet
var config = {
    apiKey: "<API_KEY>",
    authDomain: "<PROJECT_ID>.firebaseapp.com",
    databaseURL: "https://<DATABASE_NAME>.firebaseio.com",
    storageBucket: "<BUCKET>.appspot.com",
};
firebase.initializeApp(config);
```

And voila! Now you can deploy on Zeit Now 2.0.

What about using other firebase submodules, like `auth`?

Simply import those submodules (importing causes side effects). So you do something like this:

```
import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
// etc...
```