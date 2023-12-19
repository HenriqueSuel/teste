import { getApps, initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBwB6yArLLuuy3veMgtdXsw3PGHuMN5LA4",
    authDomain: "coderhouse-react-out.firebaseapp.com",
    projectId: "coderhouse-react-out",
    storageBucket: "coderhouse-react-out.appspot.com",
    messagingSenderId: "570858638308",
    appId: "1:570858638308:web:adbf428a0b39a476a4d5f1"
};

const APP_FIREBASE = getApps().length > 0 ? getApps()[0] : initializeApp(firebaseConfig);


export { APP_FIREBASE }