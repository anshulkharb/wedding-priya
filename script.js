const countdown = document.querySelector("#countdown");
const weddingStart = new Date("2026-06-20T18:15:00+05:30");

function renderCountdown() {
  if (!countdown) return;

  const now = new Date();
  const diff = weddingStart.getTime() - now.getTime();

  if (diff <= 0) {
    countdown.textContent = "Celebrations have begun.";
    return;
  }

  const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
  countdown.textContent = `${days} days to the celebrations`;
}

renderCountdown();
