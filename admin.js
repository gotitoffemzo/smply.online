import {
    db
}
from "./firebase.js";

import {

    collection,

    addDoc

}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const ADMIN_EMAIL =
    "admin@smpl.site";

function isAdmin() {

    return (
        window.currentUser &&
        window.currentUser.email ===
        ADMIN_EMAIL
    );

}

window.addVideo = async function () {

    if (!isAdmin()) {

        alert("Admin Only");

        return;

    }

    const title =
        prompt("Video Title");

    const videoUrl =
        prompt("Video URL");

    const premium =
        confirm("Premium Only?");

    try {

        await addDoc(
            collection(db, "videos"),
            {
                title,
                videoUrl,
                premium
            }
        );

        alert("Video Added");

        location.reload();

    }
    catch (error) {

        alert(error.message);

    }

}