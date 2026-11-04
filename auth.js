import {
    auth
}
from "./firebase.js";

import {

    createUserWithEmailAndPassword,

    signInWithEmailAndPassword,

    onAuthStateChanged

}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

window.currentUser = null;

onAuthStateChanged(auth, (user) => {

    if (user) {

        window.currentUser = user;

        console.log("Logged In:", user.email);

    }

});

window.signup = async function () {

    const email = prompt("Email");

    const password = prompt("Password");

    try {

        await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );

        alert("Account Created");

    }
    catch (error) {

        alert(error.message);

    }

}

window.login = async function () {

    const email = prompt("Email");

    const password = prompt("Password");

    try {

        await signInWithEmailAndPassword(
            auth,
            email,
            password
        );

        alert("Logged In");

    }
    catch (error) {

        alert(error.message);

    }

}