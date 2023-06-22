"use strict";

window.addEventListener('keydown', function (e) {
  if (e.ctrlKey && e.code === "KeyE") {
    e.preventDefault();
    var textHolderEditor = document.getElementById('textHolderEditor');
    var text = textHolderEditor.innerText;
    var editorText = document.getElementById('editorText');
    editorText.value = text;
    textHolderEditor.classList.remove('active');
    editorText.classList.add('active');
    editorText.focus();
  }

  ;

  if (e.ctrlKey && e.code === "KeyS") {
    e.preventDefault();

    var _textHolderEditor = document.getElementById('textHolderEditor');

    var _editorText = document.getElementById('editorText');

    var _text = _editorText.value;
    _textHolderEditor.innerText = _text;

    _editorText.classList.remove('active');

    _textHolderEditor.classList.add('active');

    _editorText.blur();
  }

  ;
});

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createTable() {
  var table = document.getElementById('table');

  if (table) {
    for (var i = 0; i < 30; i++) {
      var tr = document.createElement('tr');
      var td = document.createElement('td');
      td.innerText = getRandomIntInclusive(0, 100);
      tr.append(td);
      table.getElementsByTagName('tbody')[0].append(tr);
    }
  }
}

createTable();
document.getElementById('sortData').addEventListener('click', function (el) {
  var table = this.closest('#table');
  var dataArray = [];
  var arrayElements = table.querySelectorAll('td');

  for (var i = 0; i < arrayElements.length; i++) {
    dataArray.push(+arrayElements[i].innerText);
  }

  ;
  dataArray.sort(function (a, b) {
    return a - b;
  });

  for (var _i = 0; _i < arrayElements.length; _i++) {
    arrayElements[_i].innerText = dataArray[_i];
  }

  ;
}); //console.log(document.querySelectorAll('#interactive')[0].offsetTop);

document.getElementById('interactive').addEventListener('mousedown', function (event) {
  //e.preventDefault();
  var responsiveDiv = document.getElementById('responsiveDiv');
  var startHeight = responsiveDiv.offsetHeight;
  var startWidth = responsiveDiv.offsetWidth;
  console.log(responsiveDiv.style.height);

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY); //console.log(event.pageX, event.pageY);
    //console.log(responsiveDiv.offsetHeight);
    //console.log(document.querySelectorAll('#responsiveDiv'));
  }

  ;

  function moveAt(startCoordX, startCoordY) {
    var newHeight = startHeight + (startCoordX - event.pageX);
    responsiveDiv.style.height = newHeight + 'px';
    var newWidth = startWidth + (startCoordY - event.pageY);
    responsiveDiv.style.width = newWidth + 'px'; //console.log(`${startHeight} + (${startCoordX} - (${event.pageX}))`);
  }

  document.addEventListener('mousemove', onMouseMove);
  document.getElementById('interactive').addEventListener('mouseup', function (event) {
    document.removeEventListener('mousemove', onMouseMove);
  });
  document.addEventListener('mouseup', function (event) {
    document.removeEventListener('mousemove', onMouseMove);
  });
});

document.getElementById('interactive').ondragstart = function () {
  return false;
};