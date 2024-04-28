const form = document.querySelector('.js-form');
form.addEventListener('submit', onSubmit);

const container = document.querySelector('.js-container');

const inputCurrentLength = document.querySelector('.js-length');
const inputCurrentWidth = document.querySelector('.js-width');
// console.dir(inputCurrentLength);
// console.dir(inputCurrentWidth);
// inputCurrentLength.addEventListener('input', onInput);
// inputCurrentWidth.addEventListener('input', onInput);

// function onInput() {
//   // console.log(evt.currentTarget.value);
//   const totalArea = Math.floor(
//     Number(inputCurrentLength.value * inputCurrentWidth.value * 0.025 + 2000)
//   );
//   console.log(totalArea);
//   return totalArea;
// }
function onInput() {
  var inputCurrentLength = parseFloat(document.getElementById('length').value);
  var inputCurrentWidth = parseFloat(document.getElementById('width').value);
  var res = inputCurrentLength * inputCurrentWidth * 0.025 + 2000;
  document.getElementById('res').innerText = res + 'грн';
  return res;
}

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
    color: colorsList.value,
    config: colorsList.value,
    size: typeWashbasinList.value,
    numOfBowls: bowlsrsList.value,
    addOptions: getCheckedCheckBoxes(),
  };
  // console.log(dataForm);

  const totalPrice = Math.floor(
    Number(
      dataForm.length * 7.4 * dataForm.type * dataForm.color * dataForm.config +
        dataForm.size * dataForm.numOfBowls
    )
  );
  console.log(totalPrice);

  let result = (document.getElementById('result').innerHTML =
    'Загальна сума: ' + totalPrice + 'грн');
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

// прослушивание инпутов
