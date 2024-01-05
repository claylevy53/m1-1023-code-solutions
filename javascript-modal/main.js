const $button = document.querySelector('.button-style');
const $modalContainer = document.querySelector('.modal-container');
const $modalStyles = document.querySelector('.modal-styles');
const $modalText = document.querySelector('.modal-text');
const $overlay = document.querySelector('.overlay');
const $surveyButton = document.querySelector('.survey-button');
const $row = document.querySelector('.button-row');

$button.addEventListener('click', function (event) {
  $modalContainer.style.display = 'block';
  $modalStyles.style.display = 'block';
  $button.style.display = 'block';
  $overlay.style.display = 'block';
  $row.style.display = 'block';
  $surveyButton.style.display = 'block';
  $modalText.style.display = 'block';

  $surveyButton.addEventListener('click', function (event) {
    $modalContainer.style.display = 'none';
    $modalStyles.style.display = 'none';
    $overlay.style.display = 'none';
    $row.style.display = 'none';
    $surveyButton.style.display = 'none';
    $modalText.style.display = 'none';
  });
});
