// Function to calculate the volume of an rectangle-shaped pool
function calculateRectangle(){
  // Get the width, length, and height of the rectangle-shaped pool from HTML inputs
  const rectangleWidth = document.querySelector('#rectangle--width').value;
  const rectangleLength = document.querySelector('#rectangle--length').value; 
  const rectangleHeight = document.querySelector('#rectangle--height').value;

  // Calculate the approximate volume of the rsctangle-shaped pool using a simplified formula
  const rectangle = (rectangleWidth * rectangleLength ) * rectangleHeight * 1000;

  // Round the calculated volume to the nearest whole number
  const res = rectangle.toFixed(0)

  // Create a string with an image and the calculated volume in liters
  const fraseComImagem = `<img id="imagemResultado" src="/assets/image/icons8-pato.png">${res} mil litros`;

  // Display the string with the image and volume in the HTML element with ID 'res--circle'
  document.getElementById("res--rectangle").innerHTML = fraseComImagem;
}

// Function to calculate the volume of an squard-shaped pool
function calculateSquard(){
  // Get the width, length, and height of the squard-shaped pool from HTML inputs
  const squardWidth = document.querySelector('#squard--width').value;
  const squardLength = document.querySelector('#squard--length').value;  
  const squardHeight = document.querySelector('#squard--height').value;

 // Calculate the approximate volume of the squard-shaped pool using a simplified formula
  const squard = (squardWidth * squardLength ) * squardHeight * 1000;

    // Round the calculated volume to the nearest whole number
  const res = squard.toFixed(0)

  // Create a string with an image and the calculated volume in liters
  const fraseComImagem = `<img id="imagemResultado" src="/assets/image/icons8-pato.png">${res} mil litros`;

  // Display the string with the image and volume in the HTML element with ID 'res--circle'
  document.getElementById("res--squard").innerHTML = fraseComImagem;
}

// Function to calculate the volume of an oval-shaped pool
function calculateOval(){
  // Get the width, length, and height of the oval-shaped pool from HTML inputs
  const ovalWidth = document.querySelector('#oval--width').value;
  const ovalLength = document.querySelector('#oval--length').value;  
  const ovalHeight = document.querySelector('#oval--height').value;

  // Calculate the approximate volume of the oval-shaped pool using a simplified formula
  const oval = (ovalWidth * ovalLength) * (ovalHeight * 0.785) * 1000;

  // Round the calculated volume to the nearest whole number
  const res = oval.toFixed(0)

  // Create a string with an image and the calculated volume in liters
  const fraseComImagem = `<img id="imagemResultado" src="/assets/image/icons8-pato.png">${res} mil litros`;

  // Display the string with the image and volume in the HTML element with ID 'res--circle'
  document.getElementById("res--oval").innerHTML = fraseComImagem;
}

// Function to calculate the volume of a round pool
function calculateCircle(){
  // Get the width, length, and height of the pool from HTML inputs
  const circleWidth = document.querySelector('#circle--width').value;
  const circleLength = document.querySelector('#circle--length').value;
  const circleHeight = document.querySelector('#circle--height').value;

  // Calculate the approximate volume of the pool using a simplified formula
  const circle = (circleWidth * circleLength) * (circleHeight * 0.785) * 1000;

  // Round the calculated volume to the nearest whole number
  const res = circle.toFixed(0);

  // Create a string with an image and the calculated volume in liters
  const fraseComImagem = `<img id="imagemResultado" src="/assets/image/icons8-pato.png">${res} mil litros`;

  // Display the string with the image and volume in the HTML element with ID 'res--circle'
  document.getElementById("res--circle").innerHTML = fraseComImagem;
}








// Calcular quantidade de pordutos por m2
function calculateProducts(){
  // clarificante -- 3 a 6 ML (M³)
  // algicida de choque -- 5 a 7 ML (M³)
  // algicida de manutenção -- 3 a 5 ML (M³)
  // algicida de cobre -- 20 a 30 ML (M³)
  // sulfato de aluminio -- 40 G (M³)
  // cloro granulado -- 3 a 5 G (M³)
  // cloro estabilizado -- 2 a 3 G (M³)
  // cloro poll-trat -- 3 a 6 G (M³)
  // ph certo granulado -- 17 G (M³)
  // ph + granulado -- 10 a 40 ML (M³)
  // ph - liquido -- 10 a 20 ML (M³)
  // ph + liquido -- 10 a 20 ML (M³)
}