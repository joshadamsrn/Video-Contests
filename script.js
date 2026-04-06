const videos = [
  {
    title: "Fatness",
    src: "https://www.youtube.com/embed/lOYMS33FhM8",
    cover: "images/sillyface.png"
  },
  {
    title: "Street Ball",
    src: "https://www.youtube.com/embed/lOYMS33FhM8",
    cover: "images/sillyface.png"
  },
  {
    title: "The Bridge",
    src: "https://www.youtube.com/embed/vF_dQOv-IkY",
    cover: "images/sillyface.png"
  },
  {
    title: "The Phone Call",
    src: "https://www.youtube.com/embed/j-RWVqgy15M",
    cover: "images/sillyface.png"
  }
];

const player = document.getElementById("videoPlayer");
const nowPlaying = document.getElementById("nowPlaying");
const playlistContainer = document.getElementById("playlist");

function loadPlaylist() {
  playlistContainer.innerHTML = "";

  videos.forEach((video, index) => {
    const item = document.createElement("div");
    item.className = "track";

    item.innerHTML = `
      <img src="${video.cover}" alt="${video.title} cover art" class="cover-thumb">
      <div class="video-meta">
        <div class="video-title">${video.title}</div>
      </div>
    `;

    item.addEventListener("click", () => playVideo(index));
    playlistContainer.appendChild(item);
  });
}

function playVideo(index) {
  const video = videos[index];
  player.src = `${video.src}?rel=0&modestbranding=1`;
  nowPlaying.textContent = `Now Playing: ${video.title}`;

  document.querySelectorAll(".track").forEach((track, i) => {
    track.style.background = i === index ? "#333" : "";
  });
}

loadPlaylist();
playVideo(0);
