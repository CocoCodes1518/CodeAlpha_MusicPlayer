const songs = [
    { title: "Song 1", file: "assets/Songs/Song 1.mp3", cover: "assets/Images/Song 1.png" },
    { title: "Song 2", file: "assets/Songs/Song 2.mp3", cover: "assets/Images/Song 2.png" },
    { title: "Song 3", file: "assets/Songs/Song 3.mp3", cover: "assets/Images/Song 3.png" },
    { title: "Song 4", file: "assets/Songs/Song 4.mp3", cover: "assets/Images/Song 4.png" },
    { title: "Song 5", file: "assets/Songs/Song 5.mp3", cover: "assets/Images/Song 5.png" }
];

let currentSong = 0;

const audio = document.getElementById("audio");
const title = document.getElementById("title");
const cover = document.getElementById("cover");

function loadSong(index) {
    title.textContent = songs[index].title;
    audio.src = songs[index].file;
    cover.src = songs[index].cover;
    audio.play();
}

function nextSong() {
    currentSong = (currentSong + 1) % songs.length;
    loadSong(currentSong);
}

function prevSong() {
    currentSong = (currentSong - 1 + songs.length) % songs.length;
    loadSong(currentSong);
}

// Auto play first song on load
window.onload = () => {
    loadSong(currentSong);
};
