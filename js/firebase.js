let firebaseConfig = {
    // Enter your firebase credentials
    apiKey: "AIzaSyA3ENdBP9NUZwXHCQgtswPuxM0DYoU64lM",
    authDomain: "blogs-9ef9e.firebaseapp.com",
    databaseURL: "https://blogs-9ef9e-default-rtdb.firebaseio.com",
    projectId: "blogs-9ef9e",
    storageBucket: "blogs-9ef9e.appspot.com",
    messagingSenderId: "382188555874",
    appId: "1:382188555874:web:63a6bdd2d7b59d557e4b3b",
    measurementId: "G-7MP52BQVRR"
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();
