// Function to calculate the volume of an oval-shaped pool
function calculateOval(){
  // Get the width, length, and height of the oval-shaped pool from HTML inputs
  const ovalWidth = parseFloat(document.querySelector('#oval--width').value); 
  const ovalLength = parseFloat(document.querySelector('#oval--length').value);  
  const ovalHeight = parseFloat(document.querySelector('#oval--height').value);

  // Calculate the approximate volume of the oval-shaped pool using a simplified formula
  const oval = (ovalWidth * ovalLength * ovalHeight * 0.785 * 1000).toFixed(2);

  // Create a string with an image and the calculated volume in liters
  const fraseComImagem = `<img id="imagemResultado" src="/assets/image/icons8-pato.png">${oval} L`;

  // Display the string with the image and volume in the HTML element with ID 'res--circle'
  document.getElementById("res--oval").innerHTML = fraseComImagem;
}
