import { initializeApp }
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
    getFirestore
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

import {
    getAuth
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAp0wji7XQM4AeECszbZrqj3dpbh5N6bBw",
  authDomain: "smpl-network.firebaseapp.com",
  databaseURL: "https://smpl-network-default-rtdb.firebaseio.com",
  projectId: "smpl-network",
  storageBucket: "smpl-network.firebasestorage.app",
  messagingSenderId: "1051505086200",
  appId: "1:1051505086200:web:394652e394033cbba1750d"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);

export { db, auth };