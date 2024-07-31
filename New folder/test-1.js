let videoIndex = 0;
const videos = ['dj-video1.mp4', 'dj-video2.mp4', 'dj-video3.mp4'];
const videoElement = document.getElementById('bg-video');

function changeVideo() {
    videoIndex = (videoIndex + 1) % videos.length;
    videoElement.src = videos[videoIndex];
    videoElement.play();
}

videoElement.addEventListener('ended', changeVideo);
