const $form = document.querySelector('#contact-form');

$form.addEventListener('submit', function (event) {
  event.preventDefault();

  const userName = $form.elements.name.value;
  const emailInfo = $form.elements.email.value;
  const messageText = $form.elements.message.value;

  const formData = {
    Name: userName,
    Email: emailInfo,
    Message: messageText,
  };

  console.log(formData);
  $form.reset();
});
