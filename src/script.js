const form = document.querySelector('.js-form');
form.addEventListener('submit', onSubmit);

const container = document.querySelector('.js-container');

function onSubmit(evt) {
  evt.preventDefault();

  const {
    num,
    typeList,
    configList,
    colorsList,
    typeWashbasinList,
    bowlsrsList,
    addOptions,
  } = evt.currentTarget.elements;

  const dataForm = {
    length: num.value,
    type: typeList.value,
    config: colorsList.value,
    size: typeWashbasinList.value,
    numOfBowls: bowlsrsList.value,
    addOptions: getCheckedCheckBoxes(),
  };
  console.log(dataForm);

  console.log(dataForm.numOfBowls);
  console.log(dataForm.config);
}
// чекбоксы
function getCheckedCheckBoxes() {
  const checkboxes = document.getElementsByClassName('checkbox');
  console.log(checkboxes);
  const checkboxesChecked = []; // можно в массиве их хранить, если нужно использовать
  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      checkboxesChecked.push(checkboxes[i].value);
      console.log(checkboxes[i].value); // положим в массив выбранный
    }
  }
  return checkboxesChecked; // для использования как знначение в обьекте
}

//выпадающие инпуты

const typeWashbasinSelect = document.getElementById('typesWashbasin');
document.addEventListener('change', e => {
  const o = e.target;
  if (o.tagName != 'SELECT') return;
  const oo = o.options[o.selectedIndex];
  if (oo.id === 'typesWashbasin3') {
    document.getElementById('selectionSize').hidden = false;
  } else {
    document.getElementById('selectionSize').hidden = true;
  }
});
