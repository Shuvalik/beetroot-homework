window.addEventListener('keydown', function(e){
   if (e.ctrlKey && e.code === "KeyE") {
      e.preventDefault();
      let textHolderEditor = document.getElementById('textHolderEditor');
      let text = textHolderEditor.innerText;
      let editorText = document.getElementById('editorText');
      editorText.value = text;
      textHolderEditor.classList.remove('active');
      editorText.classList.add('active');
      editorText.focus();
   };
   if (e.ctrlKey && e.code === "KeyS") {
      e.preventDefault();
      let textHolderEditor = document.getElementById('textHolderEditor');
      let editorText = document.getElementById('editorText');
      let text = editorText.value;
      textHolderEditor.innerText = text;

      editorText.classList.remove('active');
      textHolderEditor.classList.add('active');
      editorText.blur();
   };
})
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; 
}
function createTable() {
   let table = document.getElementById('table');
   if (table) {
      for (let i = 0; i< 30; i++) {
         let tr = document.createElement('tr');
         let td = document.createElement('td');
         td.innerText = getRandomIntInclusive(0, 100);
         tr.append(td);
         table.getElementsByTagName('tbody')[0].append(tr);
      }
   }
}
createTable();
document.getElementById('sortData').addEventListener('click', function(el) {
   const table = this.closest('#table');
   let dataArray = [];
   const arrayElements = table.querySelectorAll('td');
   for (let i = 0; i < arrayElements.length; i++) {
      dataArray.push(+arrayElements[i].innerText);
   };
   dataArray.sort(function(a,b){ 
      return a - b
   });
   for (let i = 0; i < arrayElements.length; i++) {
      arrayElements[i].innerText = dataArray[i];
   };
});

const buttonCorner = document.getElementById('interactive'); 
const responsiveDiv = document.getElementById('responsiveDiv');
let isResizable = false,
	startHeight = 0,
	startWidth = 0,
	startCoordX = 0,
	startCoordY = 0;
buttonCorner.addEventListener('mousedown', function(event) {
   isResizable = true;
   startCoordX = event.pageX;
   startCoordY = event.pageY;
   startHeight = responsiveDiv.offsetHeight;
   startWidth = responsiveDiv.offsetWidth;
});
window.addEventListener('mousemove', function(event) {
   if (isResizable) {
         let newHeight = startHeight - (startCoordY - (event.pageY));
         responsiveDiv.style.height = newHeight + 'px';
         
         let newWidth = startWidth - (startCoordX - (event.pageX));
         responsiveDiv.style.width = newWidth + 'px';
   }
});

window.addEventListener('mouseup', function() {
   isResizable = false;
});