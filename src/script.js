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
  console.log(dataForm.size);
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

// typeWashbasinSelect.onclick = function (e) {
//   document.getElementById('selectionSize').hidden = false;
// };

// var canvas = document.getElementById('canvas');
// var ctx = canvas.getContext('2d');

// ctx.fillStyle = 'green';
// ctx.fillRect(10, 10, 100, 100);
// new EasyC(document.getElementById('canvas'), [
//   {
//     type: 'image',
//     x: 250,
//     y: 100,
//     src: '2.png',
//   },
// ]).draw();
