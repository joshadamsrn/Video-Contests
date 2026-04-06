const videos = [
  {
    title: "Sam the Ninja 1",
    src: "videos/Sam The Ninja 1.mp4",
    author: "Sam Adams",
    cover: "images/ninjasam.png"
  },
  {
    title: "Sam the Ninja 2",
    src: "videos/Sam The Ninja 2.mp4",
    author: "Sam Adams",
    cover: "images/ninjasam.png"
  },
  {
    title: "Sam the Ninja 3",
    src: "videos/Sam The Ninja 3.mp4",
    author: "Sam Adams",
    cover: "images/ninjasam.png"
  },
  {
    title: "Sam the Ninja 4",
    src: "videos/Sam The Ninja 4.mp4",
    author: "Sam Adams",
    cover: "images/ninjasam.png"
  }
];

const player = document.getElementById("videoPlayer");
const source = document.getElementById("videoSource");
const nowPlaying = document.getElementById("nowPlaying");
const playlistContainer = document.getElementById("playlist");

// Load playlist
function loadPlaylist() {
  playlistContainer.innerHTML = "";

  videos.forEach((video, index) => {
    const item = document.createElement("div");
    item.className = "track";

    item.innerHTML = `
      <img src="${video.cover}" style="width:60px;height:60px;border-radius:8px;margin-right:12px;">
      <div>
        <div>${video.title}</div>
        <div style="font-size:12px;color:#aaa;">${video.author}</div>
      </div>
    `;

    item.style.display = "flex";
    item.style.alignItems = "center";

    item.onclick = () => playVideo(index);

    playlistContainer.appendChild(item);
  });
}

// Play selected video
function playVideo(index) {
  const video = videos[index];

  source.src = video.src;
  player.load();
  player.play();

  nowPlaying.textContent = `Now Playing: ${video.title} — ${video.author}`;
}

// Initialize
loadPlaylist();
playVideo(0);