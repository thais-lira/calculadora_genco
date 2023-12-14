// Function to calculate the volume of an rectangle-shaped pool
function calculateRectangle(){
  // Get the width, length, and height of the rectangle-shaped pool from HTML inputs
  const rectangleWidth = parseFloat(document.querySelector('#rectangle--width').value);
  const rectangleLength = parseFloat(document.querySelector('#rectangle--length').value); 
  const rectangleHeight = parseFloat(document.querySelector('#rectangle--height').value);

  // Calculate the approximate volume of the rsctangle-shaped pool using a simplified formula
  const rectangle = (rectangleWidth * rectangleLength  * rectangleHeight * 1000).toFixed(0);

  // Create a string with an image and the calculated volume in liters
  const fraseComImagem = `<img id="imagemResultado" src="/assets/image/icons8-pato.png">${rectangle} mil litros`;

  // Display the string with the image and volume in the HTML element with ID 'res--rectangle'
  document.getElementById("res--rectangle").innerHTML = fraseComImagem;
}

// Function to calculate the volume of an squard-shaped pool
function calculateSquard(){
  // Get the width, length, and height of the squard-shaped pool from HTML inputs
  const squardWidth = parseFloat(document.querySelector('#squard--width').value);
  const squardLength = parseFloat(document.querySelector('#squard--length').value);  
  const squardHeight = parseFloat(document.querySelector('#squard--height').value);

 // Calculate the approximate volume of the squard-shaped pool using a simplified formula
  const squard = (squardWidth * squardLength * squardHeight * 1000) .toFixed(0);

  // Create a string with an image and the calculated volume in liters
  const fraseComImagem = `<img id="imagemResultado" src="/assets/image/icons8-pato.png">${squard} mil litros`;

  // Display the string with the image and volume in the HTML element with ID 'res--squard'
  document.getElementById("res--squard").innerHTML = fraseComImagem;
}

// Function to calculate the volume of an oval-shaped pool
function calculateOval(){
  // Get the width, length, and height of the oval-shaped pool from HTML inputs
  const ovalWidth = parseFloat(document.querySelector('#oval--width').value); 
  const ovalLength = parseFloat(document.querySelector('#oval--length').value);  
  const ovalHeight = parseFloat(document.querySelector('#oval--height').value);

  // Calculate the approximate volume of the oval-shaped pool using a simplified formula
  const oval = (ovalWidth * ovalLength * ovalHeight * 0.785 * 1000).toFixed(0);

  // Create a string with an image and the calculated volume in liters
  const fraseComImagem = `<img id="imagemResultado" src="/assets/image/icons8-pato.png">${oval} mil litros`;

  // Display the string with the image and volume in the HTML element with ID 'res--circle'
  document.getElementById("res--oval").innerHTML = fraseComImagem;
}

// Function to calculate the volume of a round pool
function calculateCircle(){
  // Get the width, length, and height of the pool from HTML inputs
  const circleWidth = parseFloat(document.querySelector('#circle--width').value);
  const circleLength = parseFloat(document.querySelector('#circle--length').value) ;
  const circleHeight = parseFloat(document.querySelector('#circle--height').value);

  // Calculate the approximate volume of the pool using a simplified formula
  const circle = (circleWidth * circleLength * circleHeight * 0.785 * 1000).toFixed(0);

  // Create a string with an image and the calculated volume in liters
  const fraseComImagem = `<img id="imagemResultado" src="/assets/image/icons8-pato.png">${circle} mil litros`;

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

function calculateProducts() {
  // Obter o produto selecionado e o volume da piscina
  var selectedProduct = document.getElementById("select_products").value;
  var poolSize = parseFloat(document.getElementById("pool_size").value);

  // Definir quantidades recomendadas para cada produto 
  var productQuantities = {
    'clarificante': { min: 3, max: 6, unit: 'ML', factor: 1000 },
    'algicidachoque': { min: 5, max: 7, unit: 'ML', factor: 1000 },
    'algicidamanutencao': { min: 3, max: 5, unit: 'ML', factor: 1000 },
    'algicidasemcobre': { min: 20, max: 30, unit: 'ML', factor: 1000 },
    'sulfatodealuminio': { quantity: 40, unit: 'G', factor: 1000  },
    'clorogranulado': { min: 3, max: 5, unit: 'G', factor: 1000  },
    'cloroestabilizado': { min: 2, max: 3, unit: 'G', factor: 1000  },
    'cloropolltrat': { min: 3, max: 6, unit: 'G', factor: 1000  },
    'phcertogranulado': { quantity: 17, unit: 'G', factor: 1000  },
    'phmaisgranulado': { min: 10, max: 40, unit: 'ML', factor: 1000 },
    'phmenosliquido': { min: 10, max: 20, unit: 'ML', factor: 1000 },
    'phmaisliquido': { min: 10, max: 20, unit: 'ML', factor: 1000 }

  };

  // Verificar se o produto selecionado existe nas quantidades recomendadas
  if (selectedProduct in productQuantities) {
    var productInfo = productQuantities[selectedProduct];

    // Exibir a dosagem mínima e máxima no console
    console.log(`Dosagem mínima para ${selectedProduct}: ${productInfo.min} ${productInfo.unit}`);
    console.log(`Dosagem máxima para ${selectedProduct}: ${productInfo.max} ${productInfo.unit}`);
    
    // Aqui você pode adicionar lógica adicional ou enviar dados para o servidor, conforme necessário
  } else {
    // Produto selecionado não encontrado
    console.error("Produto selecionado não encontrado. Por favor, escolha um produto válido.");
  }
}

calculateProducts()



