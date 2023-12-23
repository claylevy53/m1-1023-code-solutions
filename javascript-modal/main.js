const $button = document.querySelector('.button-style');

$button.addEventListener('click', function (event) {
  const mainDiv = document.createElement('div');
  const modal = document.createElement('div');
  const surveyButton = document.createElement('button');
  const buttonRow = document.createElement('div');
  const surveryText = document.createElement('p');
  const overlay = document.createElement('div');

  surveryText.innerHTML = 'Would you like to take a survey?';
  surveyButton.innerHTML = 'NO';

  surveyButton.className = 'survey-button';
  modal.className = 'modal-styles';
  buttonRow.className = 'button-row';
  mainDiv.className = 'modal-container';
  overlay.className = 'overlay';

  mainDiv.appendChild(modal);
  mainDiv.appendChild(buttonRow);
  buttonRow.appendChild(surveyButton);
  modal.appendChild(surveryText);
  mainDiv.appendChild(overlay);

  const $mainContainer = document.querySelector('.container');

  $mainContainer.appendChild(mainDiv);

  surveyButton.addEventListener('click', function (event) {
    mainDiv.style.display = 'none';
  });
});
