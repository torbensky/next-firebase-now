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