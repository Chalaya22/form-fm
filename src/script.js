const form = document.getElementById('form');
console.log(form);
form.addEventListener('submit', onSubmit);

// const container = document.querySelector('.js-container');

// const inputCurrentLength = document.querySelector('.js-length');
// const inputCurrentWidth = document.querySelector('.js-width');
// const btnSubmit = document.querySelector('.js-button');
// console.dir(inputCurrentLength.value);
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
// document.getElementById('typesWashbasin3').value = onInput();

// function onInput() {
//   var inputCurrentLength = parseFloat(document.getElementById('length').value);
//   var inputCurrentWidth = parseFloat(document.getElementById('width').value);
//   var res = inputCurrentLength * inputCurrentWidth * 0.025 + 2000;
//   document.getElementById('res').innerText = res + 'грн';
//   console.log(res);

//   return res;
// }

function onSubmit(evt) {
  evt.preventDefault();

  const {
    num,
    depth,
    typeList,
    configList,
    colorsList,
    typeWashbasinList,
    bowlsrsList,
    addOptions,
    send,
    suma,
    lengths,
    width,
  } = evt.currentTarget.elements;

  const dataForm = {
    length: num.value,
    inputDepth: depth.value,
    type: typeList.value,
    color: colorsList.value,
    config: colorsList.value,
    size: typeWashbasinList.value,
    numOfBowls: bowlsrsList.value,
    addOptions: getCheckedCheckBoxes(),
    btn: send.value,
    sumaBtn: suma.value,
    inputLength: lengths.value,
    inputWeight: width.value,
  };
  const leng = dataForm.length;
  const deep = dataForm.inputDepth;
  console.log(dataForm.sumaBtn);
  console.log(leng);
  console.log(dataForm.inputWeight);
  console.log(deep);

  const addSize = Math.floor(
    dataForm.inputLength * dataForm.inputWeight * 0.025 + 2000
  );

  const totalSpetPrice = Math.floor(
    dataForm.length * 7.4 * dataForm.type * dataForm.color * dataForm.config +
      addSize * dataForm.numOfBowls
  );
  console.log(addSize);
  console.log(totalSpetPrice);

  const totalPrice = Math.floor(
    Number(
      dataForm.length * 7.4 * dataForm.type * dataForm.color * dataForm.config +
        dataForm.size * dataForm.numOfBowls
    )
  );
  console.log(totalPrice);

  if (
    (document.getElementById('lengths').value != '') &
    (document.getElementById('width').value != '')
  ) {
    document.getElementById('result').value =
      'Загальна сума: ' + totalSpetPrice + 'грн';
  } else {
    document.getElementById('result').value =
      'Загальна сума: ' + totalPrice + 'грн';
  }
}

function clearData() {
  document.getElementById('result').value = 'Вартість, грн';
  document.getElementById('form').reset();
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');

  // Очищаем все пространство холста
  ctx.clearRect(0, 0, canvas.width, canvas.height);
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
typeWashbasinSelect.addEventListener('change', e => {
  const o = e.target;
  if (o.tagName != 'SELECT') return;
  const oo = o.options[o.selectedIndex];
  if (oo.id === 'typesWashbasin3') {
    document.getElementById('selectionSize').hidden = false;
  } else {
    document.getElementById('selectionSize').hidden = true;
  }
});

// CANVAS

// const canvas = document.getElementById('canvas');
// const ctx = canvas.getContext('2d');
// const WID = canvas.width2;
// const HEI = canvas.height2;
// const LIMIT = 200;
// let points = []; // Будет хранить данные про точки: x, y, цвет.

// function draw() {
//   // ctx.clearRect(0, 0, WID, HEI);
//   ctx.strokeStyle = 'blue';
//   ctx.strokeRect(
//     0,
//     0,
//     (canvas.width1 = document.getElementById('num').value),
//     (canvas.width1 = document.getElementById('depth').value)
//   );

//   // В массиве points хранятся объекты вида:
//   //   { x: число, y: число, color: "rgb( , , )" }

//   // points.forEach(function (point) {
//   //   // циклом рисует все точки
//   //   ctx.fillStyle = point.color;
//   //   ctx.fillRect(point.x, point.y, size, size);
//   // });

//   // points.push(new Point()); // Создает новый объект точки и добавляет его в массив.
//   // if (points.length > LIMIT) points.shift(); // Больше 200 ? Удалить первый.

//   requestAnimationFrame(draw);
//   //  заново вызывает функцию примерно через 16 миллисекунд,
//   // и зацикливается (~60 вызовов в секунду)
//   // Все точки на каждом вызове рисуются заново.
// }

const canvas = document.getElementById('canvas');
const WID = canvas.width1;
const HEI = canvas.height1;
const LIMIT = 15;
let size1 = canvas.width2;
let size2 = canvas.height2;
let points = []; // Будет хранить данные про точки: x, y, цвет.

function draw() {
  if (canvas.getContext) {
    const ctx = canvas.getContext('2d');

    ctx.lineWidth = 1.0; // устанавливаем толщину линии
    ctx.textAlign = 'start';
    ctx.setLineDash([15, 5]); //массив чисел, которые устанавливают расстояния между линиями
    ctx.font = '24px Verdana ';
    ctx.fillStyle = 'grey';
    ctx.textBaseline = 'alphabetic';
    ctx.letterSpacing = '3px';
    ctx.textAlign = "left"
    ctx.fillText('<довжина , мм>', 25, 25);
    ctx.fillText('<глибина> , мм>', 900, 250);

    ctx.strokeRect(
      0,
      0,
      (canvas.width1 = document.getElementById('num').value),
      (canvas.height1 = document.getElementById('depth').value)
    );

    points.forEach(function (point) {
      // циклом рисует все точки
      ctx.strokeStyle = point.color;
      ctx.strokeRect(
        (document.getElementById('x').value),
        (document.getElementById('y').value),
        (width2 = document.getElementById('lengths').value),
        (height2 = document.getElementById('width').value)
      );
    });
    points.push(new Point()); // Создает новый объект точки и добавляет его в массив.
    if (points.length > LIMIT) points.shift(); // Больше 200 ? Удалить первый.
    // requestAnimationFrame(draw);
  }
}

function rand_color() {
  let r = (Math.random() * 256) | 0; // | 0 ← Отбрасывает дробную часть
  let g = (Math.random() * 256) | 0;
  let b = (Math.random() * 256) | 0;

  return `rgb(${r},${g},${b})`;
  // равносильно → "rgb(" + r + "," + g + "," + b + ")"
}
function Point() {
  // Справка: «Функции-конструкторы»
  this.x = (Math.random() * (WID - size1)) | 0;
  this.y = (Math.random() * (HEI - size2)) | 0;
  this.color = rand_color();
}
console.log(points);
