/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
// Import the functions you need from the SDKs you need


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChyzU2Lc1mjoI15EEiaxSNVTbzwBiTi-I",
  authDomain: "friendlychat-e2efc.firebaseapp.com",
  projectId: "friendlychat-e2efc",
  storageBucket: "friendlychat-e2efc.appspot.com",
  messagingSenderId: "865905524543",
  appId: "1:865905524543:web:b968a151b5a7d18c4c9d8a"
};


export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}