let length;
let width;
let radius;
let lateral;
const pi=3.141592;

function calculateArea() {
 length = parseFloat(document.getElementById('length').value);
 width = parseFloat(document.getElementById('width').value);

let area = length * width;

 document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;
}

function calculateAreaC() {
 radius = parseFloat(document.getElementById('radius').value);
 lateral = parseFloat(document.getElementById('lateral').value);

let area = radius * pi*(radius + lateral);

 document.getElementById('resultC').innerText = `The area of the cone is: ${area.toFixed(2)}`;
}