// Function to calculate the volume of an rectangle-shaped pool
function calculateRectangle(){
  // Get the width, length, and height of the rectangle-shaped pool from HTML inputs
  const rectangleWidth = parseFloat(document.querySelector('#rectangle--width').value);
  const rectangleLength = parseFloat(document.querySelector('#rectangle--length').value); 
  const rectangleHeight = parseFloat(document.querySelector('#rectangle--height').value);

  // Calculate the approximate volume of the rsctangle-shaped pool using a simplified formula
  const rectangle = (rectangleWidth * rectangleLength  * rectangleHeight * 1000).toFixed(2);

  // Create a string with an image and the calculated volume in liters
  const fraseComImagem = `<img id="imagemResultado" src="/assets/image/icons8-pato.png">${rectangle} L`;

  // Display the string with the image and volume in the HTML element with ID 'res--rectangle'
  document.getElementById("res--rectangle").innerHTML = fraseComImagem;
}