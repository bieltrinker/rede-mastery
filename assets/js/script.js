const sounds = [
  'assets/sound/soco1.mp3',
  'assets/sound/soco2.mp3',
  'assets/sound/soco3.mp3',
  'assets/sound/soco4.mp3',
  'assets/sound/soco5.mp3',
  'assets/sound/soco6.mp3',
  'assets/sound/soco7.mp3',
  'assets/sound/soco8.mp3',
  'assets/sound/soco9.mp3',
  'assets/sound/soco10.mp3'
];

let currentAudio = null;
document.addEventListener('click', function(event) {

  if (event.target.closest('#betterExperienceModal')) return;
  
  if (currentAudio && !currentAudio.paused) return;

  const randomIndex = Math.floor(Math.random() * sounds.length);
  const randomSound = sounds[randomIndex];
  currentAudio = new Audio(randomSound);
  currentAudio.play();
  currentAudio.onended = () => { currentAudio = null; };
});

document.addEventListener("DOMContentLoaded", function () {

  var player = videojs('advanced-video');

  AOS.init({
    duration: 800,
    once: true,
  });

  lottie.loadAnimation({
    container: document.getElementById("lottie-scroll"),
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "/assets/animations/scrollDown.json"
  });

  const modal = document.getElementById('betterExperienceModal');
  const yesBtn = document.getElementById('yesBtn');
  const noBtn = document.getElementById('noBtn');

  const bgMusic = new Audio('assets/sound/background.mp3');
  bgMusic.loop = true;
  bgMusic.volume = 0.1;

  const effect1 = new Audio('assets/sound/effect1.mp3');
  const effect2 = new Audio('assets/sound/effect2.mp3');

  setTimeout(() => {
    modal.classList.remove('hidden');
  }, 2000);
  const closeModal = () => {
    modal.classList.add('exit');
    setTimeout(() => {
      modal.classList.add('hidden');
      modal.classList.remove('exit');
    }, 500);
  };

  yesBtn.addEventListener('click', () => {
    closeModal();
    effect1.play();
    effect1.onended = () => {
      bgMusic.play();
    };
  });

  noBtn.addEventListener('click', () => {
    closeModal();
    effect2.play();
  });

  player.on('play', function() {
    player.volume(0.5);
    if (!bgMusic.paused) {
      bgMusic.pause();
    }
  });
  
});

const playerCountElement = document.getElementById('dynamic-player-count');
let playerCount = 50;

setInterval(() => {
  const randomChange = Math.floor(Math.random() * 5) + 1;
  const direction = Math.random() > 0.5 ? 1 : -1;
  playerCount += direction * randomChange;

  if (playerCount > 80) playerCount = 80;
  if (playerCount < 40) playerCount = 40;

  playerCountElement.textContent = playerCount;
}, 2000);