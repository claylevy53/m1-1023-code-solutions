const $uL = document.querySelector('ul');

$uL.addEventListener('click', function (event) {
  if (event.target.tagName === 'BUTTON') {
    const removeItem = event.target.closest('.task-list-item');
    console.log('Closest Parent:', removeItem);
    removeItem.remove();
  } else {
    console.log('Event.target:', event.target);
    console.log('Event.target.TagName:', event.target.tagName);
  }
});
