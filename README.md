# VOIS TODO LIST APP

<br />
<br />

<p align="center"> 
<img src="https://www.vodafone.com/sites/default/files/inline-images/gN08grNr8s9vipkhltm4sWWezExdQg5LwJrGY2Ma2ojTjCnvi2.png" style="width: 400px">
</p>


The task project is built using bare ```react-native``` CLI. So, in order to get the project uop and running, all that is needed _aside from having functional simulators for iOS and Android_, is to install the required NPM packages and then run the project:

```javascript
npm install

// For Android:
npx react-native run-android

// For iOS
npx react-native run-ios
```

## Used Technologies, Third-party Packages, and Libraries
1. React Native CLI.
2. Redux & React Redux for managing state.
3. Animated API from react-native to perform all the required animations.

## Project Structure
```javascript
-- components (contains all the components being utilized and composed to render the application)
        |- TodoItem
                |- TodoItem.js
                |- TodoItem.styles.js
        |- TodoList
                |- TodoList.js
                |- TodoList.styles.js
        |- TodoListHeader
-- store (contains all the Redux store components and configurations)
        |- actions
                |- todos.js
                |- ...
        |- reducers
                |- todos.js
                |- ...
        |- store.js
-- utils (contains common configurations)
        |- common.js
-- App.js (composes all the sections components to form the application and finally render it to the DOM)

```
