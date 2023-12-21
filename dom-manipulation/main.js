let numberClicks = 0;

const hotButtonDOM = document.querySelector('.hot-button');
const clickCountDOM = document.querySelector('.click-count');

hotButtonDOM.addEventListener('click', function (event) {
  numberClicks++;
  clickCountDOM.textContent = 'Clicks: ' + numberClicks;
  if (numberClicks < 4) {
    hotButtonDOM.className = 'hot-button cold';
  }
  if (numberClicks < 7 && numberClicks >= 4) {
    hotButtonDOM.className = 'hot-button cool';
  }
  if (numberClicks < 10 && numberClicks >= 7) {
    hotButtonDOM.className = 'hot-button tepid';
  }
  if (numberClicks < 13 && numberClicks >= 10) {
    hotButtonDOM.className = 'hot-button warm';
  }
  if (numberClicks < 16 && numberClicks >= 13) {
    hotButtonDOM.className = 'hot-button hot';
  }
  if (numberClicks > 16) {
    hotButtonDOM.className = 'hot-button nuclear';
  }
});
