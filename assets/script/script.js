/*
Volume da piscina quadrada =  Largura(m) x Comprimento(m) x Profundidade(m)

        Diâmetro Maior: 9 m
        Diâmetro Menor: 2,3 m
        Profundidade: 1,20 m
        CÁLCULO: 9 x 2,3 x 1,20 = 24,84 m³
*/ 

function calculateSquard(){
  const squardWidth = document.querySelector('#squard--width').value;
  const squardHeight = document.querySelector('#squard--height').value;
  const squardDepth = document.querySelector('#squard--depth').value;

  const square = (squardWidth * squardHeight) * squardDepth * 1000;
  const res = square.toFixed(2)

  console.log(`A piscina possui ${res} Litros`);
}

calculateSquard();

/*
Volume piscina redonda = Diâmetro(m) x Diâmetro(m) x Profundidade(m) x 0,8

      Diâmetro: 4,5 m
      Profundidade: 1,20 m
      CÁLCULO: 4,50 x 4,50 x 1,20 x 0,8 = 19.44 m³
*/

function calculateCircle(){
  const circleWidth = document.querySelector('#circle--width').value;
  const circleHeight = document.querySelector('#circle--height').value;
  const circleDepth = document.querySelector('#circle--depth').value;

  const square = (circleWidth * circleHeight) * (circleDepth * 0.8);
  const total = square.toFixed(2);

  console.log(`A piscina possui ${total} Litros`);
}

calculateCircle();


/*
Piscina oval
Volume (m³) = Diâmetro Maior(m) x Diâmetro Menor(m) x Profundidade(m) x 0,8

      Diâmetro Maior: 9 m
      Diâmetro Menor: 2,3 m
      Profundidade: 1,20 m
      CÁLCULO: 9 x 2,3 x 1,20 x 0,8 = 19,87 m³
*/ 


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