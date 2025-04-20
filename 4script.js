const cards = [
  '🍎','🍌','🍇','🍓',
  '🍍','🥝','🍉','🍒',
  '🍎','🍌','🍇','🍓',
  '🍍','🥝','🍉','🍒'
];

let flippedCards = [];
let matchedCards = [];

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function createBoard() {
  const board = document.getElementById('game-board');
  shuffle(cards);

  cards.forEach((emoji, index) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.index = index;
    card.dataset.emoji = emoji;
    card.textContent = '';
    card.addEventListener('click', flipCard);
    board.appendChild(card);
  });
}

function flipCard() {
  const card = this;
  const emoji = card.dataset.emoji;

  if (flippedCards.length < 2 && !card.classList.contains('flipped')) {
    card.textContent = emoji;
    card.classList.add('flipped');
    flippedCards.push(card);

    if (flippedCards.length === 2) {
      checkMatch();
    }
  }
}

function checkMatch() {
  const [card1, card2] = flippedCards;
  if (card1.dataset.emoji === card2.dataset.emoji) {
    card1.classList.add('matched');
    card2.classList.add('matched');
    matchedCards.push(card1, card2);
    checkWin();
  } else {
    setTimeout(() => {
      card1.textContent = '';
      card2.textContent = '';
      card1.classList.remove('flipped');
      card2.classList.remove('flipped');
    }, 1000);
  }
  flippedCards = [];
}

function checkWin() {
  if (matchedCards.length === cards.length) {
    setTimeout(() => {
      alert('🎉 You matched them all! Play again?');
      location.reload();
    }, 500);
  }
}

createBoard();
