const form = document.querySelector('.js-form');
console.dir(form);
form.addEventListener('submit', onSubmit);

function onSubmit(evt) {
  evt.preventDefault();

  const {
    num,
    typeList,
    configList,
    colorsList,
    typeWashbasinList,
    addOptions,
  } = evt.currentTarget.elements;

  const dataForm = {
    length: num.value,
    type: typeList.value,
    config: colorsList.value,
    size: typeWashbasinList.value,
    addOptions: getCheckedCheckBoxes(),
  };
  console.log(dataForm);
}

function getCheckedCheckBoxes() {
  const checkboxes = document.getElementsByClassName('checkbox');
  console.log(checkboxes);
  const checkboxesChecked = []; // можно в массиве их хранить, если нужно использовать
  for (let index = 0; index < checkboxes.length; index++) {
    if (checkboxes[index].checked) {
      checkboxesChecked.push(checkboxes[index].value);
      console.log(checkboxes[index].value); // положим в массив выбранный
    }
  }
  return checkboxesChecked; // для использования как знначение в обьекте
}

// function getCheckedCheckBoxes() {
//   var selectedCheckBoxes = document.querySelectorAll('input.checkbox:checked');

//   var checkedValues = Array.from(selectedCheckBoxes).map(cb => cb.value);

//   console.log(checkedValues);

//   return checkedValues; // для использования в нужном месте
// }
