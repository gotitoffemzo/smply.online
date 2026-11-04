import {
    db
}
from "./firebase.js";

import {

    collection,

    getDocs

}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

window.playlist = [];

window.currentVideo = 0;

async function loadVideos() {

    const querySnapshot =
        await getDocs(collection(db, "videos"));

    querySnapshot.forEach((doc) => {

        const data = doc.data();

        window.playlist.push({

            videoUrl: data.videoUrl,

            title: data.title,

            premium: data.premium || false

        });

    });

    if (window.playlist.length > 0) {

        const video =
            document.getElementById("chatVideo");

        video.src =
            window.playlist[0].videoUrl;

        document.getElementById("videoTitle")
            .innerText =
            window.playlist[0].title;

        document.getElementById("statusText")
            .innerText =
            "Channel Ready";

    }

}

loadVideos();

window.playVideo = function () {

    const thumbnail =
        document.getElementById("videoThumbnail");

    const video =
        document.getElementById("chatVideo");

    const text =
        document.getElementById("justClickText");

    const audio =
        document.getElementById("luckiomb");

    audio.pause();

    audio.currentTime = 0;

    thumbnail.style.display = "none";

    text.style.display = "none";

    video.style.display = "block";

    video.play();

}

window.nextVideo = function () {

    window.currentVideo++;

    if (
        window.currentVideo >=
        window.playlist.length
    ) {

        window.currentVideo = 0;

    }

    const video =
        document.getElementById("chatVideo");

    video.src =
        window.playlist[
            window.currentVideo
        ].videoUrl;

    document.getElementById("videoTitle")
        .innerText =
        window.playlist[
            window.currentVideo
        ].title;

    video.play();

}