function calculateDiameterRound(){
  const form = document.querySelector('.form_calc') 
  const result = document.querySelector('.result');
  // Redonda = diâmetro x diâmetro x profundidade média x 0,785.

  function pushEvent(event){
    event.preventDefault()

    const roundDiameterLarger = form.querySelector('#calculate_diameter_larger').value;
    const roundDiameterSmaller = form.querySelector('#calculate_length_smaller').value;
    const roundDepth = form.querySelector('#calculate_depth_round').value;

    const round = (roundDiameterLarger * roundDiameterSmaller) * (roundDepth * 0.786);


  result.innerHTML +=`<p>${round}</p>`
 }


  form.addEventListener('submit', pushEvent);

}

calculateDiameterRound();



function calculateDiameterSquare(){
  // Quadrada =  largura x comprimento x profundidade média.
  const width = document.querySelector('#calculate_width').value;
  const length = document.querySelector('#calculate_length').value;
  const squardDepth = document.querySelector('#calculate_depth_squard').value;

  const square = (width * length) * squardDepth;

  console.log(square);

}

calculateDiameterSquare();
  

function calculateProducts(){
  let calculate = document.querySelectorAll('#select_products')
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