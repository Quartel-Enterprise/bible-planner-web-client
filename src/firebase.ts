import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getRemoteConfig } from "firebase/remote-config";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCjUxzRZxxkpUOkwvxJ3C2sGAmVSrKAG04",
    authDomain: "bible-planner-98ad6.firebaseapp.com",
    projectId: "bible-planner-98ad6",
    storageBucket: "bible-planner-98ad6.firebasestorage.app",
    messagingSenderId: "169733566422",
    appId: "1:169733566422:web:33c26710febecc334a7e77",
    measurementId: "G-L4M243ZG59"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const remoteConfig = getRemoteConfig(app);

// Set minimum fetch interval to 0 for development, otherwise default is 12 hours
remoteConfig.settings.minimumFetchIntervalMillis = 10000; // 10 seconds for dev / debug purposes
remoteConfig.defaultConfig = {
    show_instagram: false,
};

export { app, analytics, remoteConfig };
