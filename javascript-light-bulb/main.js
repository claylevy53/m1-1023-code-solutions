const buttonSelector = document.querySelector('.light-bulb');
const bodySelector = document.body;

let isLightOn = true;

buttonSelector.addEventListener('click', function (event) {
  if (isLightOn) {
    bodySelector.className = 'lights-off';
    buttonSelector.className = 'light-bulb-off';
  } else {
    bodySelector.className = 'lights-on';
    buttonSelector.className = 'light-bulb-on';
  }
  isLightOn = !isLightOn;
});
