function playVideo(videoSrc) {
    const iframe = document.getElementById('main-video');
    iframe.src = videoSrc;
}

function searchVideos() {
    const query = document.getElementById('search-bar').value.toLowerCase();
    const videoItems = document.querySelectorAll('.video-item');
    videoItems.forEach(item => {
        const title = item.querySelector('p').textContent.toLowerCase();
        item.style.display = title.includes(query) ? 'block' : 'none';
    });
}
