//dom objects
var color = document.getElementById('colorPicker');
//Select Color
var size = document.getElementById('sizePicker');
//Select Size
var grid = document.getElementById('pixelCanvas');

var height = document.getElementById('inputHeight').value;
var width = document.getElementById('inputWidth').value;

makeGrid(height, width);

size.addEventListener('submit', (Event) => {
  Event.preventDefault();
//preventDefault will make the page not refresh on click..
  var height = document.getElementById('inputHeight').value;
  var width = document.getElementById('inputWidth').value;
  grid.firstElementChild.remove();

  makeGrid(height, width);
//This sizePicker is going to make a grid with user inputs.

});
// When size is submitted by the user, call makeGrid()
function makeGrid(height,width) {
//I know I can use i for index etc.. Just trying to make more sense, with h,w.
  for (var h = 0; h < height; h++) {
    var row = grid.insertRow(h);
    for (var w = 0; w < width; w++) {
      var cell = row.insertCell(w);
      cell.addEventListener('click', (Event) => {
        Event.target.style.backgroundColor = color.value;
      });
    }
  }

}

// Your code goes here!
//Cited Material
//Udacity Mentor - Philip W.
//https://www.youtube.com/watch?v=iMeGEsVAEO8
//https://www.youtube.com/watch?v=37aLNbBqbds
