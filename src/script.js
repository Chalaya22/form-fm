const form = document.querySelector('.js-form');
console.dir(form);
form.addEventListener('submit', onSubmit);

function onSubmit(evt) {
  evt.preventDefault();
  const form = evt.currentTarget;
}
