window.onload = () => {
  // Confetti animation
  const duration = 4 * 1000;
  const end = Date.now() + duration;

  (function frame() {
    confetti({
      particleCount: 5,
      angle: 60,
      spread: 55,
      origin: { x: 0 }
    });
    confetti({
      particleCount: 5,
      angle: 120,
      spread: 55,
      origin: { x: 1 }
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();

  // Music autoplay
  const music = document.getElementById("birthday-music");
  music.play().catch(() => {
    console.log("Autoplay blocked. Music will play on user interaction.");
  });
};
