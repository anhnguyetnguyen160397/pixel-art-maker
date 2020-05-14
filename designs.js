let form = document.getElementById('sizePicker');
let table = document.getElementById('pixelCanvas');
let heightInput = document.getElementById('inputHeight');
let widthInput = document.getElementById('inputWidth');


form.onsubmit = function (event){
    event.preventDefault();
    height = heightInput.value;
    width = widthInput.value;
    makeGrid(height,width);
    fillColor();
}


function makeGrid(){
    for (var i = 0; i<height; i++){
        var tr = table.insertRow(i);
        for (var j = 0; j<width; j++){
            var td = tr.insertCell(j);
        }
    }
}

function fillColor(){
    cells = document.getElementsByTagName('td');
    for (var i = 0; i<cells.length; i++){
        var item =cells[i];
        item.addEventListener('click', (function(_item) {
            var color = document.getElementById('colorPicker').value;
            _item.style.backgroundColor = color;
        }).bind(this, item))
    }
}

/*
function fillColor(){
    cells = document.getElementsByTagName('td');
    var arr = Array.prototype.slice.call( cells )
    arr.forEach (cellFunction);
} 
*/   


// function cellFunction (item){
//     item.addEventListener('click',function(){
//         var color = document.getElementById('colorPicker').value;
//         item.style.backgroundColor = color;
//     })
// }

// for (var i = 0; i<cells.length; i++){
//     cells[i].addEventListener('click', function(){
//         var color = document.getElementById('colorPicker').value;
//         cells[i].style.backgroundColor = color;
//     })
// }