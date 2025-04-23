const countdownEl = document.getElementById("countdown");
const videoContainer = document.getElementById("video-container");
const video = document.getElementById("myVideo");

// Set target date: April 25, 2025 00:00
const targetDate = new Date("2025-04-25T00:00:00").getTime();

const timer = setInterval(() => {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance <= 0) {
    clearInterval(timer);
    countdownEl.style.display = "none";
    videoContainer.style.display = "block";
    video.play();
  } else {
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownEl.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }
}, 1000);
