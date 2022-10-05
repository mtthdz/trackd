```
                  ___           ___           ___           ___          _____    
      ___        /  /\         /  /\         /  /\         /__/|        /  /::\   
     /  /\      /  /::\       /  /::\       /  /:/        |  |:|       /  /:/\:\  
    /  /:/     /  /:/\:\     /  /:/\:\     /  /:/         |  |:|      /  /:/  \:\ 
   /  /:/     /  /:/~/:/    /  /:/~/::\   /  /:/  ___   __|  |:|     /__/:/ \__\:|
  /  /::\    /__/:/ /:/___ /__/:/ /:/\:\ /__/:/  /  /\ /__/\_|:|____ \  \:\ /  /:/
 /__/:/\:\   \  \:\/:::::/ \  \:\/:/__\/ \  \:\ /  /:/ \  \:\/:::::/  \  \:\  /:/ 
 \__\/  \:\   \  \::/~~~~   \  \::/       \  \:\  /:/   \  \::/~~~~    \  \:\/:/  
      \  \:\   \  \:\        \  \:\        \  \:\/:/     \  \:\         \  \::/   
       \__\/    \  \:\        \  \:\        \  \::/       \  \:\         \__\/    
                 \__\/         \__\/         \__\/         \__\/                  

```

## Trackd ##
version 0.0.1 <br />

Trackd is a nutrition tracking app built with React, Express, NodeJS and MongoDB. <br />
<br />
Please note that this project is currently being developed and does not currently have production servers.
The project prototype can be found on <a href="https://www.figma.com/file/GHpjvTa8jIGI1iLor4JICX/Prototype?node-id=0%3A1" target="_blank">here on Figma</a>.<br />


### Getting Started ###

```console
install dependencies
$ npm install

starts react server 3000
$ cd client && npm start

starts nodemon on port 8000 (requires connection to MongoDB)
$ cd server && npm start
```

### Project Cloning ### 
To clone this project into working order, two requirements must be met:
1. MongoDB server access must be granted
2. Firebase Admin key must be set up

Please reach out to matt@mtthdz.com in order to be whitelisted on the trackd MongoDB server. At the moment, we use Firebase Admin on the back end to authorize the user via Firebase's JWT alternative. Because this requires the use of a one-time secret key (where the creation of a new key negates the previous key), we cannot currently run the authorization process and thus, run the entire app. We suggest cloning this project repository alongside the creation of a (new) Firebase project instance in order to get this project up and running successfully.<br />

Restructuring the use of Firebase Admin is currently being looked into.


### Progress Log ###
- initial project directory structure
- (back end) MongoDB server setup
- (back end) user schema, routes & controller*
- (back end) authorization process via Firebase Admin
- (front end) routing & page components
- (front end) accordian header & row components
- (front end) TDEE form
- (front end) recipe form
- (front end) authentication process via Firebase Auth (Google only)*

(* in progress)
