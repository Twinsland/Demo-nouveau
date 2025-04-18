
const music = document.getElementById('bg-music');
const progress = document.getElementById('progress');

function toggleMusic() {
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
}

music.ontimeupdate = () => {
  progress.value = (music.currentTime / music.duration) * 100;
};

function next() {
  alert("Fonctionnalité suivante en développement...");
}
