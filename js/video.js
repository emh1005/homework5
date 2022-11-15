// Add js here.
const videoPlayer = document.querySelector('#videoplayer');

// page load (do i need the event listener?)
//window.addEventListener('load', function() {
    videoPlayer.preload = 'auto';
    videoPlayer.autoplay = false;
    videoPlayer.loop = false;
    //vid.load();
//})

//play button
document.querySelector('#play').addEventListener('click', function() {
    videoPlayer.play();
})

//pause button
document.querySelector('#pause').addEventListener('click', function() {
    videoPlayer.pause();
})

//slow down
document.querySelector('#slower').addEventListener('click', function() {
    if (videoPlayer.playbackRate === 1) {
        videoPlayer.playbackRate = 0.5;
    } else if (videoPlayer.playbackRate === 2) {
        videoPlayer.playbackRate = 1;
    } else if (videoPlayer.playbackRate === 0.5) {
        alert("Video is at slowest speed!");
    }
})

//speed up
document.querySelector('#faster').addEventListener('click', function() {
    if (videoPlayer.playbackRate === 1) {
        videoPlayer.playbackRate = 2;
    } else if (videoPlayer.playbackRate === 0.5) {
        videoPlayer.playbackRate = 1;
    } else if (videoPlayer.playbackRate === 2) {
        alert("Video is at fastest speed!");
    }
})

//skip ahead
document.querySelector('#skip').addEventListener('click', function() {
    videoPlayer.currentTime += 15;
    if (videoPlayer.currentTime > videoPlayer.duration) {
        videoPlayer.currentTime = 0; //need to play again??
    }
})

//mute
document.querySelector('#mute').addEventListener('click', function() {
    if (!videoPlayer.muted){
        videoPlayer.muted = true; 
    } else {
        videoPlayer.muted = false;
    }
})

//volume slider
document.querySelector('#slider').addEventListener('change', function() {
    videoPlayer.volume = (document.querySelector('#slider').value / 100);
    document.querySelector('#volume').textContent = `${document.querySelector('#slider').value}%`;
})