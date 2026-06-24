// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCJ9CksW5U7g4LHeGllP6eZow2bEQG5T9I",
    authDomain: "jasper-salon.firebaseapp.com",
    databaseURL: "https://jasper-salon-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "jasper-salon",
    storageBucket: "jasper-salon.firebasestorage.app",
    messagingSenderId: "544056798937",
    appId: "1:544056798937:web:42ab85400a955cebdd18c8"
};

// Initialize Firebase using the Compat (Namespaced) method
firebase.initializeApp(firebaseConfig);

// Initialize Services
const auth = firebase.auth();     // Handles Signup/Login
const db = firebase.firestore(); // Handles Double Booking