const spanElements = document.querySelectorAll('span');
const bodySelector = document.querySelector('body');
let currentPosition = 0;
let attempts = 0;
let rightKeys = 0;
let x = true;

function popup() {
  const score = (rightKeys / (attempts - 2)).toFixed(2) * 100;

  const newP = document.createElement('p');
  const newDIV = document.createElement('div');
  const playAgainPTag = document.createElement('p');
  const buttonYes = document.createElement('button');
  const buttonNo = document.createElement('button');

  newP.className = 'score';
  buttonYes.className = 'button-yes';
  playAgainPTag.className = 'play-again-text';
  newDIV.className = 'play-again';
  buttonNo.className = 'button-no';

  newP.textContent = 'Typing Accuracy: ' + score + '%';
  playAgainPTag.innerHTML = 'Play Again?';
  buttonYes.innerHTML = 'Yes';
  buttonNo.innerHTML = 'No';

  bodySelector.append(newP);
  bodySelector.append(newDIV);
  newDIV.append(playAgainPTag);
  newDIV.append(buttonYes);
  newDIV.append(buttonNo);

  const noButton = document.querySelector('.button-no');
  const yesButton = document.querySelector('.button-yes');

  noButton.addEventListener('click', (e) => {
    newDIV.remove(bodySelector);
  });

  yesButton.addEventListener('click', (e) => {
    location.reload();
  });

  x = !x;
}

bodySelector.addEventListener('keydown', function (event) {
  if (currentPosition === spanElements.length - 1) {
    if (x === true) {
      if (spanElements[currentPosition].textContent === event.key) {
        rightKeys++;
        popup();
      } else if (spanElements[currentPosition].className === 'red') {
        if (spanElements[currentPosition].textContent === event.key) {
          spanElements[currentPosition].className = 'green';
          popup();
        }
      }
    }
  }
  if (spanElements[currentPosition].textContent === event.key) {
    spanElements[currentPosition].className = 'green';
    rightKeys++;
  }
  if (
    spanElements[currentPosition].textContent !== event.key &&
    spanElements[currentPosition].innerHTML !== '&nbsp;'
  ) {
    spanElements[currentPosition].className = 'red';
  } else {
    spanElements[currentPosition].classList.remove('underscore');
    spanElements[currentPosition + 1].className = 'underscore';
    currentPosition++;
  }
  attempts++;
});
