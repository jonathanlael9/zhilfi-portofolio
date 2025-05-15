const audio = document.getElementById('audio');
const progressBar = document.getElementById("progress-bar");
const currentTime = document.getElementById("current-time");
const durationTime = document.getElementById("duration");

audio.addEventListener("timeupdate", () => {
  progressBar.value = audio.currentTime;
  currentTime.textContent = formatTime(audio.currentTime);
});

audio.addEventListener("loadedmetadata", () => {
  progressBar.max = audio.duration;
  durationTime.textContent = formatTime(audio.duration);
});


progressBar.addEventListener("input", () => {
  audio.currentTime = progressBar.value;
});

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60).toString().padStart(2, '0');
  return `${mins}:${secs}`;
}
    let isPlaying = false;

    function togglePlay() {
      const icon = document.getElementById('play-icon');
    
      if (audio.paused) {
        audio.play();
        icon.innerHTML = '<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>';
      } else {
        audio.pause();
        icon.innerHTML = '<path d="M8 5v14l11-7z"/>';
      }
    }
    

    function rewind() {
      audio.currentTime -= 10;
    }

    function forward() {
      audio.currentTime += 10;
    }