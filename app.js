window.toggleAudio = function () {

    const audio =
        document.getElementById("luckiomb");

    if (audio.paused) {

        audio.play();

    }
    else {

        audio.pause();

    }

}

window.subscribe = function () {

    alert(
        "Stripe integration coming next."
    );

}