import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
   apiKey: "AIzaSyCURT2fOybzPN5Fnzq2wqjMHVnyT1WJID8",
   authDomain: "educational-platform-ef524.firebaseapp.com",
   projectId: "educational-platform-ef524",
   storageBucket: "educational-platform-ef524.appspot.com",
   messagingSenderId: "350507030138",
   appId: "1:350507030138:web:fe31aab74f112cf2c38dc3",
   measurementId: "G-7B6LQ3B38T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
