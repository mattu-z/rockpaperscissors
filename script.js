const CHOICES = {
  rock:     { emoji: '✊', beats: 'scissors' },
  paper:    { emoji: '✋', beats: 'rock' },
  scissors: { emoji: '✌️', beats: 'paper' },
};
const keys = Object.keys(CHOICES);
let playerScore = 0;
let computerScore = 0;
const playerPickEl = document.getElementById('player-pick');
const computerPickEl = document.getElementById('computer-pick');
const playerScoreEl = document.getElementById('player-score');
const computerScoreEl = document.getElementById('computer-score');
const verdictEl = document.getElementById('verdict');
function randomChoice() {
  return keys[Math.floor(Math.random() * keys.length)];
}
function pop(el) {
  el.classList.remove('pop');
  void el.offsetWidth;
  el.classList.add('pop');
  setTimeout(() => el.classList.remove('pop'), 300);
}
function play(playerChoice) {
  const computerChoice = randomChoice();
  playerPickEl.textContent = CHOICES[playerChoice].emoji;
  computerPickEl.textContent = CHOICES[computerChoice].emoji;
  pop(playerPickEl);
  pop(computerPickEl);
  verdictEl.classList.remove('win', 'lose', 'draw');
  if (playerChoice === computerChoice) {
    verdictEl.textContent = "It's a draw!";
    verdictEl.classList.add('draw');
  } else if (CHOICES[playerChoice].beats === computerChoice) {
    playerScore++;
    verdictEl.textContent = 'You win!';
    verdictEl.classList.add('win');
  } else {
    computerScore++;
    verdictEl.textContent = 'Computer wins!';
    verdictEl.classList.add('lose');
  }
  playerScoreEl.textContent = playerScore;
  computerScoreEl.textContent = computerScore;
}
document.querySelectorAll('.choice').forEach(btn => {
  btn.addEventListener('click', () => play(btn.dataset.choice));
});
document.getElementById('reset').addEventListener('click', () => {
  playerScore = 0;
  computerScore = 0;
  playerScoreEl.textContent = '0';
  computerScoreEl.textContent = '0';
  playerPickEl.textContent = '❓';
  computerPickEl.textContent = '❓';
  verdictEl.textContent = 'Make your move!';
  verdictEl.classList.remove('win', 'lose', 'draw');
});
