// Function to calculate the volume of a round pool
function calculateCircle(){
  // Get the width, length, and height of the pool from HTML inputs
  const circleWidth = parseFloat(document.querySelector('#circle--width').value);
  const circleLength = parseFloat(document.querySelector('#circle--length').value) ;
  const circleHeight = parseFloat(document.querySelector('#circle--height').value);

  // Calculate the approximate volume of the pool using a simplified formula
  const circle = (circleWidth * circleLength * circleHeight * 0.785 * 1000).toFixed(2);

  // Create a string with an image and the calculated volume in liters
  const fraseComImagem = `<img id="imagemResultado" src="/assets/image/icons8-pato.png">${circle} L`;

  // Display the string with the image and volume in the HTML element with ID 'res--circle'
  document.getElementById("res--circle").innerHTML = fraseComImagem;
}
