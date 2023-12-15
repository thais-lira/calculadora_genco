// Function to calculate the volume of an squard-shaped pool
function calculateSquard(){
  // Get the width, length, and height of the squard-shaped pool from HTML inputs
  const squardWidth = parseFloat(document.querySelector('#squard--width').value);
  const squardLength = parseFloat(document.querySelector('#squard--length').value);  
  const squardHeight = parseFloat(document.querySelector('#squard--height').value);

 // Calculate the approximate volume of the squard-shaped pool using a simplified formula
  const squard = (squardWidth * squardLength * squardHeight * 1000) .toFixed(2);

  // Create a string with an image and the calculated volume in liters
  const fraseComImagem = `<img id="imagemResultado" src="/assets/image/icons8-pato.png">${squard} L`;

  // Display the string with the image and volume in the HTML element with ID 'res--squard'
  document.getElementById("res--squard").innerHTML = fraseComImagem;
}

