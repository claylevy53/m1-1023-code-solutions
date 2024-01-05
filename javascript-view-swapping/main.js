const $tabContainer = document.querySelector('.tab-container');
const $tabElements = document.querySelectorAll('.tab');
const $viewElements = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', (e) => {
  if (e.target.matches('.tab')) {
    for (const views of $viewElements) {
      const dataView = e.target.getAttribute('data-view');
      const viewsAtrribute = views.getAttribute('data-view');
      if (viewsAtrribute !== dataView) {
        views.className = 'view hidden';
      } else {
        views.className = 'view';
      }
    }
    for (const elem of $tabElements) {
      if (elem === e.target) {
        elem.className = 'tab active';
      } else {
        elem.className = 'tab';
      }
    }
  }
});
